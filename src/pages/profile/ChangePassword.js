import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import ChangePasswordInput from '../../components/profile/ChangePasswordInput';

const ChangePassword = ({ history }) => {
  let token = Cookies.get('token');

  if (!token) return <Redirect to="/signin" />;

  return (
    <main>
      <ChangePasswordInput history={history} />;
    </main>
  );
};

export default ChangePassword;
