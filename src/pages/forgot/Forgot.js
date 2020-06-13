import React from 'react';
import styled from 'styled-components';
import {
  StyledMain,
  Container,
  H1,
  Section,
  ButtonTitle,
} from '../../lib/extends';

const ForgotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
  transition: ease 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 170px;
  }
`;

const Forgot = () => {
  return (
    <StyledMain>
      <Container>
        <Section>
          <H1>
            Please <span>choose</span> your purpose
          </H1>
        </Section>
        <Section>
          <ForgotWrapper as="a" href="/forgot/mail">
            <img src="/images/mail.jpeg" alt="find-email" />
            <ButtonTitle>Email</ButtonTitle>
          </ForgotWrapper>
          <ForgotWrapper as="a" href="/forgot/password">
            <img src="/images/password.jpeg" alt="find-password" />
            <ButtonTitle>Password</ButtonTitle>
          </ForgotWrapper>
        </Section>
      </Container>
    </StyledMain>
  );
};

export default Forgot;
