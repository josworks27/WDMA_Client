import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: white;
  transition: ease 0.3s;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
`;

export const MainLink = styled(StyledLink)`
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
