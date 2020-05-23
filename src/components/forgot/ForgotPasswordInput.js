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

      // 스테이트 초기화
      dispatch({
        type: FORGOT_RESET,
      });
    }

    if (findPasswordError) {
      alert(findPasswordError);
    }
  }, [changed, findPasswordError]);

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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="email address"
          required
        />
        <button type="submit">Reset</button>
        <button type="button" style={display} onClick={handleClick}>
          Back to Sign In
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordInput;
