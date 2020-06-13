import React from 'react';
import ForgotMailInput from '../../components/forgot/ForgotMailInput';
import { StyledMain } from '../../lib/extends';

const ForgotMail = ({ history }) => {
  return (
    <StyledMain>
      <ForgotMailInput history={history} />
    </StyledMain>
  );
};

export default ForgotMail;
