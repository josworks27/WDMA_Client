import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import modalStyle from '../../lib/modalStyle';
import { SEARCH_DRESS_REQUEST } from '../../store/modules/dress/dress';

const SearchDressModal = ({ history, setShowSearchModal }) => {
  const [showModal, setShowModal] = useState(true);
  const [searchDress, setSearchDress] = useState({
    model: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchDress({
      ...searchDress,
      model: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: SEARCH_DRESS_REQUEST,
      data: {
        model: searchDress.model,
      },
    });

    // 재검색 시 다시 모달창 띄우기 위해 false로 셋하기
    setShowSearchModal(false);

    // 모달창 종료
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    history.push('/dress');
  };

  return (
    <>
      <ReactModal isOpen={showModal} style={modalStyle}>
        <h1>search dress modal</h1>
        <>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <span>Model: </span>
              <input
                type="text"
                name="model"
                placeholder="model"
                value={searchDress.model}
                onChange={handleChange}
                required
              />
              <br />
              <button type="submit">Search</button>
            </form>
          </div>
        </>
        <button type="button" onClick={handleCloseModal}>
          Close
        </button>
      </ReactModal>
    </>
  );
};

export default SearchDressModal;
