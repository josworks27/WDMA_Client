import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ValidationCheck from './ValidationCheck';
import { MAIL_AUTH_REQUEST } from '../../store/modules/user';

const ValidationAuth = () => {
  const [userInputEmail, setUserInputEmail] = useState('');

  const { email, mailAuthError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserInputEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userInputEmail.includes('@') || !userInputEmail.includes('.')) {
      alert('Please Check your Email address');
    } else {
      dispatch({
        type: MAIL_AUTH_REQUEST,
        data: {
          email: userInputEmail,
        },
      });
    }
  };

  useEffect(() => {
    if (mailAuthError.message === 'Request failed with status code 409') {
      alert('Existing Email');
    }
  }, [mailAuthError]);

  return (
    <>
      {email ? (
        <ValidationCheck />
      ) : (
        <div className="container">
          <h1>Please input your Email address</h1>
          <div className="input-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                value={userInputEmail}
                onChange={handleChange}
                required
              />
              <button type="submit">Send</button>
            </form>
            <div />
          </div>
        </div>
      )}
    </>
  );
};

export default ValidationAuth;
