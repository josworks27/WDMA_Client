import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SIGN_IN_REQUEST, USER_RESET } from '../../store/modules/user/user';

import './SigninInput.css';

const SigninInput = ({ history }) => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });
  const { email, password } = account;

  const { me, signinError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (me) {
      history.push('/');
    }

    if (signinError.message === 'Request failed with status code 404') {
      alert('Non-Existing Email');
      dispatch({
        type: USER_RESET,
      });
    } else if (signinError.message === 'Request failed with status code 401') {
      alert('Incorrect Password');
      dispatch({
        type: USER_RESET,
      });
    }
  }, [me, signinError, history, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SIGN_IN_REQUEST,
      data: {
        email,
        password,
      },
    });
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
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
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/validation">Sign Up</Link>
          </li>
          <li>
            <Link to="/forgot">Forgot</Link>
          </li>
        </ul>
      </div>
      <div />
      <div />
    </div>
  );
};

export default SigninInput;
