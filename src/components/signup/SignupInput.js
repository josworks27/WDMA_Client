import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreList from './StoreList';
import { SIGN_UP_REQUEST, USER_RESET } from '../../store/modules/user/user';
import { FormGroup, Button } from '../../lib/extends';
import {
  SignupContainer,
  SignupInputForm,
  SignupFormGroup,
} from './signupStyles';

const SignupInput = ({ history }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    password1: '',
    password2: '',
    store: 'Yokohama',
    manager: false,
  });

  const dispatch = useDispatch();
  const { email, store, me, signupError } = useSelector(
    (state) => state.userReducer,
  );

  useEffect(() => {
    if (me) {
      dispatch({
        type: USER_RESET,
      });

      history.push('/');
    }

    if (signupError) {
      alert(signupError);
    }
  }, [me, signupError, history, dispatch]);

  const validateForm = useCallback(() => {
    if (userInfo.password1 !== userInfo.password2) {
      alert('Please Check Password');
      return false;
    }
    return true;
  }, [userInfo]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const validation = validateForm();

      if (validation) {
        dispatch({
          type: SIGN_UP_REQUEST,
          data: {
            email,
            password: userInfo.password1,
            name: userInfo.name,
            store: userInfo.store,
            manager: userInfo.manager,
          },
        });
      }
    },
    [dispatch, email, userInfo, validateForm],
  );

  const handleChange = useCallback(
    (event) => {
      const { target } = event;
      const { name } = target;
      const value = target.name === 'manager' ? target.checked : target.value;

      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    },
    [userInfo],
  );

  return (
    <SignupContainer>
      <SignupInputForm onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={userInfo.name}
            required
          />
        </FormGroup>
        <FormGroup>
          <input type="text" name="email" value={email} readOnly />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            name="password1"
            placeholder="password"
            onChange={handleChange}
            value={userInfo.password1}
            required
          />
          <input
            type="password"
            name="password2"
            placeholder="again password"
            onChange={handleChange}
            value={userInfo.password2}
            required
          />
        </FormGroup>
        <SignupFormGroup>
          <span>
            Select Shop
            <span role="img" aria-label="point">
              👇
            </span>
          </span>
          <StoreList
            stores={store}
            onChange={handleChange}
            belongStore={userInfo.store}
          />
        </SignupFormGroup>
        <SignupFormGroup>
          <span>Are you manager?</span>
          <input
            name="manager"
            type="checkbox"
            checked={userInfo.manager}
            onChange={handleChange}
          />
        </SignupFormGroup>
        <Button type="submit">Submit</Button>
      </SignupInputForm>
    </SignupContainer>
  );
};

export default SignupInput;
