import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  z-index: 10;
  background-color: ${(props) => props.theme.bgColor};
  border-top: 1px dotted white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
`;

const Container = styled.div`
  margin: 5px;
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 20px;
    font-size: 0.8rem;
    p {
      color: white;
    }
  }
  div:first-child {
    color: ${(props) => props.theme.thirdColor};
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
          <p>74-1 Yamashitachō, Naka-ku, Yokohama, Kanagawa, Japan</p>
        </div>
        <div>
          <p>Copyright © ANJERY Corp. All rights reserved.</p>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
