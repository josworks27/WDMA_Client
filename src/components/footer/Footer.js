import React from 'react';
import { StyledFooter, Container } from './footerStyles';

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
