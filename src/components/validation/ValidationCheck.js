import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import useOnlyNumber from '../../util/hooks/useOnlyNumber';
import { MAIL_CHECK_REQUEST } from '../../store/modules/user/user';
import { Container, FormGroup, Button, InputForm, H1 } from '../../lib/extends';

const ValidationCheck = () => {
  const dispatch = useDispatch();
  const { checked, mailCheckError, email } = useSelector(
    (state) => state.userReducer,
  );
  const { authNumber, handleChange } = useOnlyNumber(email);

  useEffect(() => {
    if (mailCheckError) {
      alert(mailCheckError);
    }
  }, [mailCheckError]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch({
        type: MAIL_CHECK_REQUEST,
        data: {
          email,
          authNumber,
        },
      });
    },
    [authNumber, dispatch, email],
  );

  return (
    <>
      {checked ? (
        <Redirect to="/signup" />
      ) : (
        <Container>
          <InputForm onSubmit={handleSubmit}>
            <H1>
              Please <span>input</span> the number you received
            </H1>
            <FormGroup>
              <input
                type="text"
                name="auth"
                placeholder="received number"
                value={authNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit">OK</Button>
          </InputForm>
        </Container>
      )}
    </>
  );
};

export default ValidationCheck;
