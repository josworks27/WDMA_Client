import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { SIGN_IN_REQUEST } from '../store/modules/user';

const SigninInput = ({ history }) => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const { me, signinError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const { email, password } = account;

  function handleOnChange(event) {
    const { name, value } = event.target;
    setAccount({ ...account, [name]: value });
  }

  function handleSubmit() {
    dispatch({
      type: SIGN_IN_REQUEST,
      data: {
        email,
        password,
      },
    });
  }

  useEffect(() => {
    if (me) {
      localStorage.setItem('token', me.token);
      history.push('/');
    }

    if (signinError) {
      alert('로그인 오류');
    }
  }, [me, signinError]);

  return (
    <div className="container">
      <div className="input-form">
        <h1>로그인</h1>
        <div className="form-group">
          <span>이메일</span>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <span>비밀번호</span>
          <input
            type="text"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <div />
      </div>
    </div>
  );
};

export default withRouter(SigninInput);
