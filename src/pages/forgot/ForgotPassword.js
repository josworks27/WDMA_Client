import React from 'react';
import ForgotPasswordInput from '../../components/forgot/ForgotPasswordInput';

const ForgotPassword = ({ history }) => {
  return (
    <main>
      <ForgotPasswordInput history={history} />
    </main>
  );
};

export default ForgotPassword;
