import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOnlyNumber from '../../utl/hooks/useOnlyNumber';
import { MAIL_CHECK_REQUEST } from '../../store/modules/user';
import SignupInput from './SignupInput';

const ValidationCheck = ({ history, email }) => {
  const { authNumber, handleChange } = useOnlyNumber(email);
  const dispatch = useDispatch();
  const { checked, mailCheckError } = useSelector((state) => state.userReducer);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: MAIL_CHECK_REQUEST,
      data: {
        email,
        authNumber,
      },
    });
  };

  useEffect(() => {
    if (mailCheckError) {
      alert('Request failed');
    }
  }, [mailCheckError]);

  return (
    <>
      {checked ? (
        <SignupInput history={history} email={email} />
      ) : (
        <div className="container">
          <h1>Please input the number you received</h1>
          <div className="input-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="auth"
                placeholder="Received number"
                value={authNumber}
                onChange={handleChange}
                required
              />
              <button type="submit">OK</button>
            </form>
            <div />
          </div>
        </div>
      )}
    </>
  );
};

export default ValidationCheck;
