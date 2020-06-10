import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreList from './StoreList';
import { SIGN_UP_REQUEST, USER_RESET } from '../../store/modules/user/user';

const SignupInput = ({ history }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    password1: '',
    password2: '',
    store: 'Yokohama',
    manager: false,
  });

  const dispatch = useDispatch();
  const { email, store, me, signupError } = useSelector(
    (state) => state.userReducer,
  );

  useEffect(() => {
    if (me) {
      dispatch({
        type: USER_RESET,
      });

      history.push('/');
    }

    if (signupError) {
      alert(signupError);
    }
  }, [me, signupError, history, dispatch]);

  const validateForm = () => {
    if (userInfo.password1 !== userInfo.password2) {
      alert('Please Check Password');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validateForm();

    if (validation) {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          email,
          password: userInfo.password1,
          name: userInfo.name,
          store: userInfo.store,
          manager: userInfo.manager,
        },
      });
    }
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.name === 'manager' ? target.checked : target.value;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form__group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={userInfo.name}
            required
          />
        </div>
        <div className="signup-form__group">
          <input type="text" name="email" value={email} readOnly />
        </div>
        <div className="signup-form__group">
          <input
            type="password"
            name="password1"
            placeholder="password"
            onChange={handleChange}
            value={userInfo.password1}
            required
          />
          <input
            type="password"
            name="password2"
            placeholder="repeat password"
            onChange={handleChange}
            value={userInfo.password2}
            required
          />
        </div>
        <div className="signup-form__group">
          <StoreList
            stores={store}
            onChange={handleChange}
            belongStore={userInfo.store}
          />
        </div>
        <div className="signup-form__group">
          <span>Are you manager?</span>
          <input
            name="manager"
            type="checkbox"
            checked={userInfo.manager}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupInput;
