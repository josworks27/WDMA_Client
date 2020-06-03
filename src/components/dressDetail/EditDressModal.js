import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import StoreList from '../signup/StoreList';

import modalStyle from '../../lib/modalStyle';
import { PUT_DRESS_REQUEST } from '../../store/modules/dress/dress';

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
    <>
      <ReactModal isOpen={showModal} style={modalStyle}>
        <h1>edit dress modal</h1>
        <>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <span>Model: </span>
              <input
                type="text"
                name="model"
                placeholder="model"
                value={editDress.model}
                onChange={handleChange}
                required
              />
              <br />
              <span>Price: </span>
              <input
                type="number"
                name="price"
                placeholder="price"
                value={editDress.price}
                onChange={handleChange}
                required
              />
              <br />
              <span>Accessories: </span>
              <input
                type="text"
                name="accessoryOne"
                placeholder="option 1"
                value={editDress.accessoryOne}
                onChange={handleChange}
              />
              <input
                type="text"
                name="accessoryTwo"
                placeholder="option 2"
                value={editDress.accessoryTwo}
                onChange={handleChange}
              />
              <input
                type="text"
                name="accessoryThree"
                placeholder="option 3"
                value={editDress.accessoryThree}
                onChange={handleChange}
              />
              <br />
              <span>Store: </span>
              <StoreList
                belongStore={editDress.store}
                onChange={handleChange}
              />
              <br />
              <span>Image: </span>
              <input
                type="file"
                name="images"
                multiple="multiple"
                onChange={handleSelect}
              />
              <br />
              <button type="submit">Edit Dress</button>
            </form>
          </div>
        </>
        <button
          type="button"
          name="close-edit-dress-modal"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </ReactModal>
    </>
  );
};

export default EditDressModal;

// edit dress 버튼을 누르면
// editDressModal 창이 켜지고
// 기존의 드레스의 정보를 받은 input이 존재
//      => 수정가능하며, 수정 후에는 서버에 요청보내기
// 보낸 후에는 모달창이 꺼지고, 정보 변경된 Dress Detail 컴포넌트 렌더링

// ! edit dress는 스테이트와 디스패치를 별도로 관리
