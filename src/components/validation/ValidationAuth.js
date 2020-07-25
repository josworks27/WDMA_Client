import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ValidationCheck from './ValidationCheck';
import { MAIL_AUTH_REQUEST } from '../../store/modules/user/user';

import { Container, FormGroup, Button, InputForm, H1 } from '../../lib/extends';

const ValidationAuth = () => {
  const [userInputEmail, setUserInputEmail] = useState('');

  const { email, mailAuthError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mailAuthError.message === 'Request failed with status code 409') {
      alert('Existing Email');
    }
  }, [mailAuthError]);

  const handleChange = useCallback((event) => {
    setUserInputEmail(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (!userInputEmail.includes('@') || !userInputEmail.includes('.')) {
        alert('Please Check your Email address');
      } else {
        dispatch({
          type: MAIL_AUTH_REQUEST,
          data: {
            email: userInputEmail,
          },
        });
      }
    },
    [dispatch, userInputEmail],
  );

  return (
    <>
      {email ? (
        <ValidationCheck />
      ) : (
        <Container>
          <InputForm onSubmit={handleSubmit}>
            <H1>
              Please <span>input</span> your Email address
            </H1>
            <FormGroup>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={userInputEmail}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit">Send</Button>
          </InputForm>
        </Container>
      )}
    </>
  );
};

export default ValidationAuth;
