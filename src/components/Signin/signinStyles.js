import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 50%;
    display: flex;
    justify-content: center;
    li {
      padding: 0 10px;
      text-align: center;
      a {
        text-decoration: none;
        color: white;
        font-size: 1rem;
        text-transform: uppercase;
      }
    }
    li:last-child {
      border-left: 1px solid white;
    }
  }
`;

export const MainLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-weight: bold;
  height: 30px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.mainColor},
    ${(props) => props.theme.thirdColor}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
