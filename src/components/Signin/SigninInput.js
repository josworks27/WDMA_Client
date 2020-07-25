import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SIGN_IN_REQUEST, USER_RESET } from '../../store/modules/user/user';
import { Container, FormGroup, Button, InputForm } from '../../lib/extends';
import { LinkWrapper, MainLink } from './signinStyles';

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
      dispatch({ type: USER_RESET });
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
      <MainLink to="/">anjeri</MainLink>
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
      </InputForm>
    </Container>
  );
};

export default SigninInput;
