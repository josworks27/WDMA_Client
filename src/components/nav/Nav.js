import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-right: 30px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: white;
  :hover {
    color: #ff4757;
    transition: linear 0.3s;
  }
`;

const MainLink = styled(StyledLink)`
  height: 30px;
  font-weight: bold;
  letter-spacing: 7px;
  font-size: 2rem;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.mainColor},
    ${(props) => props.theme.thirdColor}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = () => {
  let token = Cookies.get('token');
  const { me } = useSelector((state) => state.userReducer);

  const handleClick = () => {
    Cookies.remove('token');
    window.location.reload();
  };

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
            <li>
              <StyledLink to="/chat">Chat</StyledLink>
            </li>
            <li>
              <StyledLink to="/dress/stats">Stats</StyledLink>
            </li>
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
            <li>
              <StyledLink to="/chat">Chat</StyledLink>
            </li>
            <li>
              <StyledLink to="/dress/stats">Stats</StyledLink>
            </li>
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
