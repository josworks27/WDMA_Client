import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SEARCH_DRESS_REQUEST } from '../../store/modules/dress/dress';
import { SearchInputForm } from './searchStyles';

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
