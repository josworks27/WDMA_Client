import styled from 'styled-components';

export const StyledHeader = styled.header`
  z-index: 1000;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 1px 5px 2px;
`;
