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

    // dispatch 하기
    dispatch({
      type: SEARCH_DRESS_REQUEST,
      data: {
        model: searchModel,
      },
    });
  };

  return (
    <>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
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
    </>
  );
};

export default SearchDressInput;
