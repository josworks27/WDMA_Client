import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  z-index: 10;
  background-color: rgba(20, 20, 20);
  border-top: 1px solid white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
`;

const Container = styled.div`
  margin: 5px;
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 40px;
    p {
      font-size: 0.8rem;
      color: white;
    }
  }
  div:first-child {
    color: ${(props) => props.theme.subColor};
    span {
      margin-right: 10px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div>
          <span>Address</span>
          <p>Basyamichi, Minatomirai-ku, Yokohama-si, Kanagawa-ken, Japan</p>
        </div>
        <div>
          <p>Copyright © ANJERY Corp. All rights reserved.</p>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
