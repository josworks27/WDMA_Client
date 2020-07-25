import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_RESET,
} from '../../store/modules/forgot/forgot';
import { Container, InputForm, FormGroup, Button, H1 } from '../../lib/extends';

const ForgotPasswordInput = ({ history }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { changed, findPasswordError } = useSelector(
    (state) => state.forgotReducer,
  );

  useEffect(() => {
    if (changed) {
      alert(`Sent to ${email}`);

      dispatch({
        type: FORGOT_RESET,
      });

      history.push('/signin');
    }

    if (findPasswordError) {
      alert(findPasswordError);
      dispatch({
        type: FORGOT_RESET,
      });
    }
  }, [changed, findPasswordError, email, dispatch, history]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch({
        type: FORGOT_PASSWORD_REQUEST,
        data: {
          email,
        },
      });
    },
    [dispatch, email],
  );

  const handleChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  return (
    <Container>
      <InputForm onSubmit={handleSubmit}>
        <H1>
          Please <span>input</span> your Eamil address
        </H1>
        <FormGroup>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email address"
            required
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Reset</Button>
        </FormGroup>
      </InputForm>
    </Container>
  );
};

export default ForgotPasswordInput;
