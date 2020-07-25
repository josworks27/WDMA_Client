import React, { useCallback } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { NavBar, StyledLink, MainLink } from './navStyles';

const Nav = () => {
  let token = Cookies.get('token');
  const { me } = useSelector((state) => state.userReducer);

  const handleClick = useCallback(() => {
    Cookies.remove('token');
    window.location.reload();
  }, []);

  return (
    <>
      {token || me ? (
        <NavBar>
          <MainLink to="/">anjeri</MainLink>
          <ul>
            <li>
              <StyledLink to="/dress">Dress list</StyledLink>
            </li>
            <li>
              <StyledLink to="/dress/add">Add dress</StyledLink>
            </li>
            <li>
              <StyledLink to="/dress/search">Search</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/chat">Chat</StyledLink>
            </li> */}
            {/* <li>
              <StyledLink to="/dress/stats">Stats</StyledLink>
            </li> */}
            <li>
              <StyledLink to="/profile">Profile</StyledLink>
            </li>
            <li>
              <StyledLink to="/" onClick={handleClick}>
                Signout
              </StyledLink>
            </li>
          </ul>
        </NavBar>
      ) : (
        <NavBar>
          <MainLink to="/">anjeri</MainLink>
          <ul>
            <li>
              <StyledLink to="/dress">Dress list</StyledLink>
            </li>
            <li>
              <StyledLink to="/dress/add">Add dress</StyledLink>
            </li>
            <li>
              <StyledLink to="/dress/search">Search</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/chat">Chat</StyledLink>
            </li> */}
            {/* <li>
              <StyledLink to="/dress/stats">Stats</StyledLink>
            </li> */}
            <li>
              <StyledLink to="/profile">Profile</StyledLink>
            </li>
            <li>
              <StyledLink to="/signin">SignIn</StyledLink>
            </li>
          </ul>
        </NavBar>
      )}
    </>
  );
};

export default Nav;
