import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FORGOT_STORE_REQUEST,
  FORGOT_MAIL_REQUEST,
  FORGOT_RESET,
} from '../../store/modules/forgot/forgot';
import StoreList from '../signup/StoreList';
import ForgotMailCheck from './ForgotMailCheck';
import { Container, InputForm, FormGroup, Button, H1 } from '../../lib/extends';
import { ForgotMailFormGroup } from './forgotStyles';

const ForgotMailInput = ({ history }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    store: 'Yokohama',
  });

  const dispatch = useDispatch();
  const { findStoreError, user, findMailError } = useSelector(
    (state) => state.forgotReducer,
  );

  useEffect(() => {
    dispatch({
      type: FORGOT_STORE_REQUEST,
    });
  }, [dispatch]);

  useEffect(() => {
    if (findStoreError) {
      alert(findStoreError);
    }

    if (findMailError) {
      alert(findMailError);
      dispatch({
        type: FORGOT_RESET,
      });
    }
  }, [findStoreError, findMailError, dispatch]);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    },
    [userInfo],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch({
        type: FORGOT_MAIL_REQUEST,
        data: {
          name: userInfo.name,
          store: userInfo.store,
        },
      });
    },
    [dispatch, userInfo],
  );

  return (
    <>
      {user.length > 0 ? (
        <ForgotMailCheck history={history} user={user} />
      ) : (
        <Container>
          <InputForm onSubmit={handleSubmit}>
            <H1>
              Please <span>input</span> your personal infomation
            </H1>
            <FormGroup>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={userInfo.name}
                placeholder="name"
                required
              />
            </FormGroup>
            <ForgotMailFormGroup>
              <span>
                Select Shop
                <span role="img" aria-label="point">
                  👇
                </span>
              </span>
              <StoreList onChange={handleChange} value={userInfo.store} />
            </ForgotMailFormGroup>
            <Button type="submit">Find</Button>
          </InputForm>
        </Container>
      )}
    </>
  );
};

export default ForgotMailInput;
