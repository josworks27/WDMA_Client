import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import ChangePasswordInput from '../../components/profile/ChangePasswordInput';
import { StyledMain } from '../../lib/extends';

const ChangePassword = ({ history }) => {
  let token = Cookies.get('token');

  if (!token) return <Redirect to="/signin" />;

  return (
    <StyledMain>
      <ChangePasswordInput history={history} />
    </StyledMain>
  );
};

export default ChangePassword;
