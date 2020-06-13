import React from 'react';
import styled from 'styled-components';
import { Container, H1 } from '../../lib/extends';

const ForgotMailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

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
