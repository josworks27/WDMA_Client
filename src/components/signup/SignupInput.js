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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={userInfo.name}
            required
          />
          <input type="text" name="email" value={email} readOnly />
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
          <StoreList
            stores={store}
            onChange={handleChange}
            belongStore={userInfo.store}
          />
          <span>Are you manager?</span>
          <input
            name="manager"
            type="checkbox"
            checked={userInfo.manager}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupInput;
