import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FORGOT_STORE_REQUEST,
  FORGOT_MAIL_REQUEST,
  FORGOT_RESET,
} from '../../store/modules/forgot/forgot';
import StoreList from '../signup/StoreList';
import ForgotMailCheck from './ForgotMailCheck';

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: FORGOT_MAIL_REQUEST,
      data: {
        name: userInfo.name,
        store: userInfo.store,
      },
    });
  };

  return (
    <>
      {user.length > 0 ? (
        <ForgotMailCheck history={history} user={user} />
      ) : (
        <div className="container">
          <form className="forgot-mail-form" onSubmit={handleSubmit}>
            <div className="forgot-mail-form__group">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={userInfo.name}
                placeholder="name"
                required
              />
            </div>
            <div className="forgot-mail-form__group">
              <StoreList onChange={handleChange} value={userInfo.store} />
            </div>
            <button type="submit">Find</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgotMailInput;
