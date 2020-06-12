import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import SigninInput from '../../components/signin/SigninInput';

const StyledMain = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
