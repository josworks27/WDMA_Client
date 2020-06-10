import React from 'react';
import Cookies from 'js-cookie';

import { Redirect } from 'react-router-dom';
import SigninInput from '../../components/signin/SigninInput';

const Signin = ({ history }) => {
  let token = Cookies.get('token');

  if (token) return <Redirect to="/dress" />;
  return (
    <main>
      <SigninInput history={history} />
    </main>
  );
};

export default Signin;
