import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SIGN_IN_REQUEST, USER_RESET } from '../../store/modules/user/user';

const Container = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-bottom: 100px;
  padding: 20px 0;
`;

const InputForm = styled.form`
  border: 1px solid ${(props) => props.theme.mainColor};
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  div:last-child {
    margin-top: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-bottom: 10px;
  input {
    border: none;
    width: 60%;
    padding: 20px;
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  width: 40%;
  background-color: ${(props) => props.theme.subColor};
  outline: none;
`;

const LinkWrapper = styled.div`
  // border: 1px solid lime;
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 50%;
    display: flex;
    justify-content: center;
    li {
      flex-basis: 100px;
      text-align: center;
      a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        text-transform: uppercase;
      }
    }
    li:last-child {
      border-left: 1px solid white;
    }
  }
`;

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
    <Container>
      <InputForm onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Signin</Button>
        </FormGroup>
      </InputForm>
      <LinkWrapper>
        <ul>
          <li>
            <Link to="/validation">Signup</Link>
          </li>
          <li>
            <Link to="/forgot">Forgot</Link>
          </li>
        </ul>
      </LinkWrapper>
    </Container>
  );
};

export default SigninInput;
