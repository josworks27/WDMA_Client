import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreList from '../signup/StoreList';
import { POST_DRESS_REQUEST } from '../../store/modules/dress/dress';
import { H1, Button } from '../../lib/extends';
import {
  AddDressContainer,
  AddDressInputForm,
  AddDressFormGroup,
  ImageWrapper,
  ButtonGroup,
} from './addDressStyles';

const AddDressInput = ({ history }) => {
  const [addDress, setAddDress] = useState({
    model: '',
    price: '',
    accessoryOne: '',
    accessoryTwo: '',
    accessoryThree: '',
    store: 'Yokohama',
    images: [],
  });

  const { dressId } = useSelector((state) => state.dressReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dressId) {
      history.push(`/dress/${dressId}`);
    }
  }, [dressId, history]);

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

    dispatch({
      type: POST_DRESS_REQUEST,
      data: { formData },
    });
  };

  return (
    <AddDressContainer>
      <H1>
        Please <span>Input</span> a new dress
      </H1>
      <AddDressInputForm onSubmit={handleSubmit}>
        <AddDressFormGroup>
          <label>Model</label>
          <input
            type="text"
            name="model"
            placeholder="model"
            value={addDress.model}
            onChange={handleChange}
            required
          />
        </AddDressFormGroup>
        <AddDressFormGroup>
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="price"
            value={addDress.price}
            onChange={handleChange}
            required
          />
        </AddDressFormGroup>
        <AddDressFormGroup>
          <label>Accessories</label>
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
        </AddDressFormGroup>
        <AddDressFormGroup>
          <span>
            Select Shop
            <span role="img" aria-label="point">
              👇
            </span>
          </span>
          <StoreList belongStore={addDress.store} onChange={handleChange} />
        </AddDressFormGroup>
        <ImageWrapper>
          <label>
            Select Image
            <span role="img" aria-label="point">
              👇
            </span>
          </label>
          <input
            type="file"
            name="images"
            multiple="multiple"
            onChange={handleSelect}
          />
        </ImageWrapper>
        <ButtonGroup>
          <Button type="submit">Add Dress</Button>
        </ButtonGroup>
      </AddDressInputForm>
    </AddDressContainer>
  );
};

export default AddDressInput;
