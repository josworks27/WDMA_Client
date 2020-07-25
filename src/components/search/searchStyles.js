import styled from 'styled-components';

export const SearchInputForm = styled.form`
  width: 100%;
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    color: white;
    background-color: rgb(20, 20, 20);
    border: none;
    padding: 0 20px;
    &:focus {
      outline: none;
      background-color: rgb(20, 20, 20);
    }
  }
`;
