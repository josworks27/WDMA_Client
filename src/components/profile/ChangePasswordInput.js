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
    <>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div>Current Password</div>
        <input
          type="password"
          name="currPassword"
          placeholder="current password"
          value={currPassword}
          onChange={handleChange}
          required
        />
        <br />
        <div>New Password</div>
        <input
          type="password"
          name="newPassword"
          placeholder="new password"
          value={newPassword}
          onChange={handleChange}
          required
        />
        <br />
        <div>Check Password</div>
        <input
          type="password"
          name="checkPassword"
          placeholder="check password"
          value={checkPassword}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Change</button>
      </form>
      <div>
        <button type="button">
          <Link to="/profile">Back</Link>
        </button>
      </div>
    </>
  );
};

export default ChangePasswordInput;
