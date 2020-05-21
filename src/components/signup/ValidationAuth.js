import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ValidationCheck from './ValidationCheck';
import { MAIL_AUTH_REQUEST } from '../../store/modules/user';

const ValidationAuth = ({ history }) => {
  const [email, setEmail] = useState('');

  const { mail, mailAuthError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please Check your Email address');
    } else {
      dispatch({
        type: MAIL_AUTH_REQUEST,
        data: {
          email,
        },
      });
    }
  };

  useEffect(() => {
    if (mailAuthError) {
      alert('Email Auth Error');
    }
  }, [mailAuthError]);

  return (
    <>
      {mail ? (
        <ValidationCheck history={history} email={email} />
      ) : (
        <div className="container">
          <h1>Please input your Email address</h1>
          <div className="input-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                value={email}
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
