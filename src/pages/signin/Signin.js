import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

import SigninInput from '../../components/signin/SigninInput';
import { StyledMain } from '../../lib/extends';

const Signin = ({ history }) => {
  let token = Cookies.get('token');

  if (token) return <Redirect to="/dress" />;
  return (
    <StyledMain>
      <SigninInput history={history} />
    </StyledMain>
  );
};

export default Signin;
