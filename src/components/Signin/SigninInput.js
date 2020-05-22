import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { SIGN_IN_REQUEST } from '../../store/modules/user/user';
import './SigninInput.css';

const SigninInput = ({ history }) => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const { me, signinError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const { email, password } = account;

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

  useEffect(() => {
    if (me) {
      localStorage.setItem('token', me.token);
      history.push('/');
    }

    if (signinError.message === 'Request failed with status code 404') {
      alert('Non-Existing Email');
    }
  }, [me, signinError, history]);

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

export default withRouter(SigninInput);
