import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import StoreList from '../signup/StoreList';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};

const EditDressModal = ({ showModal, handleCloseModal, dress }) => {
  const [editDress, setEditDress] = useState({
    model: '',
    price: '',
    accessoryOne: '',
    accessoryTwo: '',
    accessoryThree: '',
    store: 'Yokohama',
    images: [],
  });

  useEffect(() => {
    setEditDress({
      ...editDress,
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
    console.log(editDress);
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
    console.log('onSubmit 작동');
    // Add 드레스 서버에 포스트하기
    // let formData = new FormData();
    // for (let i = 0; i < editDress.images.length; i += 1) {
    //   formData.append(`images`, editDress.images[i]);
    // }

    // formData.append('model', editDress.model);
    // formData.append('price', editDress.price);
    // formData.append('accessoryOne', editDress.accessoryOne);
    // formData.append('accessoryTwo', editDress.accessoryTwo);
    // formData.append('accessoryThree', editDress.accessoryThree);
    // formData.append('store', editDress.store);

    // // 디스패치 하기
    // dispatch({
    //   type: POST_DRESS_REQUEST,
    //   data: { formData },
    // });
  };
  console.log('dress is ', dress);
  return (
    <>
      <ReactModal isOpen={showModal} style={customStyles}>
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
