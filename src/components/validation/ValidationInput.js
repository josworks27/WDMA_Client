import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ValidationAuth from './ValidationAuth';
import { MAIL_AUTH_REQUEST } from '../../store/modules/user';

const ValidationInput = ({ history }) => {
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
    }

    dispatch({
      type: MAIL_AUTH_REQUEST,
      data: {
        email,
      },
    });
  };

  useEffect(() => {
    if (mailAuthError) {
      alert('Email Auth Error');
    }
  }, [mailAuthError]);

  return (
    <>
      {mail ? (
        <ValidationAuth history={history} mail={email} />
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

export default ValidationInput;
