import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PUT_PASSWORD_REQUEST } from '../../store/modules/user/user';
import { Container, H1, Button, InputForm, FormGroup } from '../../lib/extends';

const ChangePasswordContainer = styled(Container)`
  height: 650px;
`;

const ChangePasswordFormGroup = styled(FormGroup)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 30px;
  label {
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  button {
    margin: 0 10px;
  }
`;

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
    <ChangePasswordContainer>
      <H1>
        <span>Edit</span> my password
      </H1>
      <InputForm onSubmit={handleSubmit}>
        <ChangePasswordFormGroup>
          <label>Current Password</label>
          <input
            type="password"
            name="currPassword"
            placeholder="current password"
            value={currPassword}
            onChange={handleChange}
            required
          />
        </ChangePasswordFormGroup>
        <ChangePasswordFormGroup>
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="new password"
            value={newPassword}
            onChange={handleChange}
            required
          />
        </ChangePasswordFormGroup>
        <ChangePasswordFormGroup>
          <label>Check Password</label>
          <input
            type="password"
            name="checkPassword"
            placeholder="check password"
            value={checkPassword}
            onChange={handleChange}
            required
          />
        </ChangePasswordFormGroup>
        <ButtonGroup>
          <Button type="submit">Change</Button>
        </ButtonGroup>
      </InputForm>
    </ChangePasswordContainer>
  );
};

export default ChangePasswordInput;
