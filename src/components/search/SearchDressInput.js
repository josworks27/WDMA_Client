import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SEARCH_DRESS_REQUEST } from '../../store/modules/dress/dress';

const SearchInputForm = styled.form`
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

const SearchDressInput = () => {
  const [searchModel, setSearchModel] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchModel(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: SEARCH_DRESS_REQUEST,
      data: {
        model: searchModel,
      },
    });
  };

  return (
    <SearchInputForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="model"
        placeholder="Search Dresses..."
        value={searchModel}
        onChange={handleChange}
      />
    </SearchInputForm>
  );
};

export default SearchDressInput;
