import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupInput from '../../components/signup/SignupInput';
import { StyledMain } from '../../lib/extends';

const Signup = ({ history }) => {
  const { checked } = useSelector((state) => state.userReducer);

  if (!checked) return <Redirect to="/" />;
  return (
    <StyledMain>
      <SignupInput history={history} />
    </StyledMain>
  );
};

export default Signup;
