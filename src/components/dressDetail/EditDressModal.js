import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import StoreList from '../signup/StoreList';
import modalStyle from '../../lib/modalStyle';
import { PUT_DRESS_REQUEST } from '../../store/modules/dress/dress';

const EditDressForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15px;
  color: black;
  label {
    margin-right: 10px;
  }
  select,
  input {
    width: 100px;
    margin-bottom: 10px;
  }
`;

const EditDressFormButton = styled.form`
  display: flex;
  justify-content: center;
`;

const EditDressModal = ({
  match,
  showModal,
  setShowModal,
  handleCloseModal,
  dress,
}) => {
  const dressId = match.params.id;
  const [editDress, setEditDress] = useState({
    model: '',
    price: '',
    accessoryOne: '',
    accessoryTwo: '',
    accessoryThree: '',
    store: 'Yokohama',
    images: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setEditDress({
      model: dress.model,
      price: dress.price,
      accessoryOne: dress.accessoryOne,
      accessoryTwo: dress.accessoryTwo,
      accessoryThree: dress.accessoryThree,
      store: 'Yokohama',
      images: [],
    });
  }, [dress]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditDress({
      ...editDress,
      [name]: value,
    });
  };

  const handleSelect = (event) => {
    const { files } = event.target;

    setEditDress({
      ...editDress,
      images: [...files],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    if (editDress.images.length > 0) {
      for (let i = 0; i < editDress.images.length; i += 1) {
        formData.append(`images`, editDress.images[i]);
      }
    }

    formData.append('model', editDress.model);
    formData.append('price', editDress.price);
    formData.append('accessoryOne', editDress.accessoryOne);
    formData.append('accessoryTwo', editDress.accessoryTwo);
    formData.append('accessoryThree', editDress.accessoryThree);
    formData.append('store', editDress.store);

    dispatch({
      type: PUT_DRESS_REQUEST,
      data: {
        dressId,
        formData,
      },
    });

    // state 초기화
    setEditDress({
      model: '',
      price: '',
      accessoryOne: '',
      accessoryTwo: '',
      accessoryThree: '',
      store: 'Yokohama',
      images: [],
    });

    setShowModal(false);
  };

  return (
    <ReactModal isOpen={showModal} style={modalStyle}>
      <EditDressForm onSubmit={handleSubmit}>
        <div className="edit-dress-form__group">
          <label>Model</label>
          <input
            type="text"
            name="model"
            placeholder="model"
            value={editDress.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="edit-dress-form__group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="price"
            value={editDress.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="edit-dress-form__group">
          <label>Accessories</label>
          <input
            type="text"
            name="accessoryOne"
            placeholder="option 1"
            value={editDress.accessoryOne}
            onChange={handleChange}
          />
        </div>
        <div className="edit-dress-form__group">
          <input
            type="text"
            name="accessoryTwo"
            placeholder="option 2"
            value={editDress.accessoryTwo}
            onChange={handleChange}
          />
        </div>
        <div className="edit-dress-form__group">
          <input
            type="text"
            name="accessoryThree"
            placeholder="option 3"
            value={editDress.accessoryThree}
            onChange={handleChange}
          />
        </div>
        <div className="edit-dress-form__group">
          <label>Store</label>
          <StoreList belongStore={editDress.store} onChange={handleChange} />
        </div>
        <div className="edit-dress-form__group">
          <label>Image</label>
          <input
            type="file"
            name="images"
            multiple="multiple"
            onChange={handleSelect}
          />
        </div>
      </EditDressForm>
      <EditDressFormButton>
        <button type="submit">Edit Dress</button>
        <button
          type="button"
          name="close-edit-dress-modal"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </EditDressFormButton>
    </ReactModal>
  );
};

export default EditDressModal;
