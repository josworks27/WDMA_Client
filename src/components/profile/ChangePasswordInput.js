import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PUT_PASSWORD_REQUEST } from '../../store/modules/user/user';

const ChangePasswordInput = ({ history }) => {
  const [password, setPassword] = useState({
    currPassword: '',
    newPassword: '',
    checkPassword: '',
  });

  const { currPassword, newPassword, checkPassword } = password;

  const { updatePassword, putPasswordError } = useSelector(
    (state) => state.userReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (putPasswordError) {
      setPassword({
        currPassword: '',
        newPassword: '',
        checkPassword: '',
      });
      alert(putPasswordError);
    }

    if (updatePassword) {
      history.push('/profile');
    }
  }, [putPasswordError, updatePassword, history]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== checkPassword) {
      setPassword({
        currPassword: '',
        newPassword: '',
        checkPassword: '',
      });
      alert('Please Check the password');
    } else {
      // dispatch
      dispatch({
        type: PUT_PASSWORD_REQUEST,
        data: {
          currPassword,
          newPassword,
        },
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPassword({
      ...password,
      [name]: value,
    });
  };

  return (
    <main>
      <div className="container">
        <form className="change-password-form" onSubmit={handleSubmit}>
          <div className="change-password-form__group">
            <label>Current Password</label>
            <input
              type="password"
              name="currPassword"
              placeholder="current password"
              value={currPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="change-password-form__group">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              placeholder="new password"
              value={newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="change-password-form__group">
            <label>Check Password</label>
            <input
              type="password"
              name="checkPassword"
              placeholder="check password"
              value={checkPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Change</button>
        </form>
        <div className="change-password-button">
          <button type="button">
            <Link to="/profile">Back</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChangePasswordInput;
