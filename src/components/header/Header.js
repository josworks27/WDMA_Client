import React from 'react';
import Nav from '../nav/Nav';
import { StyledHeader } from './headerStyles';

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
