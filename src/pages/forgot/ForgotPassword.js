import React from 'react';
import ForgotPasswordInput from '../../components/forgot/ForgotPasswordInput';
import { StyledMain } from '../../lib/extends';

const ForgotPassword = ({ history }) => {
  return (
    <StyledMain>
      <ForgotPasswordInput history={history} />
    </StyledMain>
  );
};

export default ForgotPassword;
