import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SEARCH_DRESS_REQUEST } from '../../store/modules/dress/dress';

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
    <form className="search-dress-form" onSubmit={handleSubmit}>
      <div className="search-dress-form__group">
        <input
          type="text"
          name="model"
          placeholder="Search Dresses..."
          value={searchModel}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
};

export default SearchDressInput;
