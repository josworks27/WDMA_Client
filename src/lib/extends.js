import styled from 'styled-components';

export const StyledMain = styled.main`
  border: 1px solid red;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-bottom: 100px;
  padding: 20px 0;
`;

export const InputForm = styled.form`
  // border: 1px solid ${(props) => props.theme.mainColor};
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  input {
    border: none;
    width: 60%;
    heigth: 20px;
    padding: 20px;
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  height: 50px;
  width: 40%;
  max-width: 150px;
  background-color: ${(props) => props.theme.subColor};
  outline: none;
`;

export const H1 = styled.h1`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2rem;
  span {
    color: ${(props) => props.theme.mainColor};
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Section = styled.section`
  // border: 1px solid red;
  width: 80%;
  display: flex;
  justify-content: center;
`;

export const ButtonTitle = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 1.2rem;
  color: white;
  background-color: ${(props) => props.theme.subColor};
`;
