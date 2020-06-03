import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import ChangePasswordInput from '../../components/profile/ChangePasswordInput';

const ChangePassword = ({ history }) => {
  let token = Cookies.get('token');

  if (!token) return <Redirect to="/signin" />;

  return (
    <>
      <ChangePasswordInput history={history} />
    </>
  );
};

export default ChangePassword;
