import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FORGOT_STORE_REQUEST,
  FORGOT_MAIL_REQUEST,
} from '../../store/modules/forgot/forgot';
import StoreList from '../signup/StoreList';
import ForgotMailCheck from './ForgotMailCheck';

const ForgotMailInput = ({ history }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    store: 'Yokohama',
  });

  const dispatch = useDispatch();
  const { store, findStoreError, user, findMailError } = useSelector(
    (state) => state.forgotReducer,
  );

  useEffect(() => {
    dispatch({
      type: FORGOT_STORE_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (findStoreError) {
      alert(findStoreError);
    }

    if (findMailError) {
      alert(findMailError);
    }
  }, [findStoreError, findMailError]);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={userInfo.name}
              placeholder="name"
              required
            />
            <StoreList
              stores={store}
              onChange={handleChange}
              value={userInfo.store}
            />
            <button type="submit">Find</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgotMailInput;
