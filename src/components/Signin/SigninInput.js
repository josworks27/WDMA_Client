import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SIGN_IN_REQUEST, USER_RESET } from '../../store/modules/user/user';

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
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="signin-form__group">
          <input
            type="text"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signin-form__group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="signin-buttons">
        <ul>
          <li>
            <Link to="/validation">Sign Up</Link>
          </li>
          <li>
            <Link to="/forgot">Forgot</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SigninInput;
