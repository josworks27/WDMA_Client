import React from 'react';
import { Container, H1 } from '../../lib/extends';
import { ForgotMailWrapper } from './forgotStyles';

const ForgotMailCheck = ({ user }) => {
  const { email } = user[0];
  const store = user[0]['store.name'];

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   history.push('/signin');
  // };

  return (
    <Container>
      <ForgotMailWrapper>
        <H1>{`Your Email accout is ${email}`}</H1>
        <p>
          {`Belongs to ${store} shop`}
          <span role="img" aria-label="forgot-email">
            🎉
          </span>
        </p>
      </ForgotMailWrapper>
      {/* <button type="button" onClick={handleClick}>
        Back to Sign In
      </button> */}
    </Container>
  );
};

export default ForgotMailCheck;
