import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_RESET,
} from '../../store/modules/forgot/forgot';

const ForgotPasswordInput = ({ history }) => {
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState({ display: 'none' });
  const dispatch = useDispatch();
  const { changed, findPasswordError } = useSelector(
    (state) => state.forgotReducer,
  );

  useEffect(() => {
    if (changed) {
      alert(`Sent to ${email}`);

      setDisplay({
        display: 'block',
      });

      dispatch({
        type: FORGOT_RESET,
      });
    }

    if (findPasswordError) {
      alert(findPasswordError);
      dispatch({
        type: FORGOT_RESET,
      });
    }
  }, [changed, findPasswordError, email, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
      data: {
        email,
      },
    });
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    history.push('/signin');
  };

  return (
    <div className="container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div className="forgot-password-form__group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email address"
            required
          />
        </div>
        <button type="submit">Reset</button>
      </form>
      <div className="forgot-password-button" style={display}>
        <button type="button" onClick={handleClick}>
          Back to Sign In
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordInput;
