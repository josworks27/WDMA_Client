import styled from 'styled-components';

export const StyledFooter = styled.footer`
  z-index: 10;
  background-color: ${(props) => props.theme.bgColor};
  border-top: 1px dotted white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
`;

export const Container = styled.div`
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
