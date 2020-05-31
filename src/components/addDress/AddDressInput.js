import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import StoreList from '../signup/StoreList';
import { POST_DRESS_REQUEST } from '../../store/modules/dress/dress';

const AddDressInput = () => {
  const [addDress, setAddDress] = useState({
    model: '',
    price: '',
    accessoryOne: '',
    accessoryTwo: '',
    accessoryThree: '',
    store: 'Yokohama',
    images: [],
  });

  const dispatch = useDispatch();

  const handleSelect = (event) => {
    const { files } = event.target;

    setAddDress({
      ...addDress,
      images: [...files],
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddDress({
      ...addDress,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add 드레스 서버에 포스트하기
    let formData = new FormData();
    for (let i = 0; i < addDress.images.length; i += 1) {
      formData.append(`images`, addDress.images[i]);
    }

    formData.append('model', addDress.model);
    formData.append('price', addDress.price);
    formData.append('accessoryOne', addDress.accessoryOne);
    formData.append('accessoryTwo', addDress.accessoryTwo);
    formData.append('accessoryThree', addDress.accessoryThree);
    formData.append('store', addDress.store);

    // 디스패치 하기
    dispatch({
      type: POST_DRESS_REQUEST,
      data: { formData },
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <span>Model: </span>
          <input
            type="text"
            name="model"
            placeholder="model"
            value={addDress.model}
            onChange={handleChange}
            required
          />
          <br />
          <span>Price: </span>
          <input
            type="number"
            name="price"
            placeholder="price"
            value={addDress.price}
            onChange={handleChange}
            required
          />
          <br />
          <span>Accessories: </span>
          <input
            type="text"
            name="accessoryOne"
            placeholder="option 1"
            value={addDress.accessoryOne}
            onChange={handleChange}
          />
          <input
            type="text"
            name="accessoryTwo"
            placeholder="option 2"
            value={addDress.accessoryTwo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="accessoryThree"
            placeholder="option 3"
            value={addDress.accessoryThree}
            onChange={handleChange}
          />
          <br />
          <span>Store: </span>
          <StoreList belongStore={addDress.store} onChange={handleChange} />
          <br />
          <span>Image: </span>
          <input
            type="file"
            name="images"
            multiple="multiple"
            onChange={handleSelect}
          />
          <br />
          <button type="submit">Add Dress</button>
        </form>
      </div>
    </>
  );
};

export default AddDressInput;
