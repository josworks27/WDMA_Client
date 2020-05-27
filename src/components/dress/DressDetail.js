import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { GET_DRESS_REQUEST } from '../../store/modules/dress/dress';
import DressDetailInfo from './DressDetailInfo';
import DressDetailEvent from './DressDetailEvent';
import AddEventModal from './AddEventModal';

const DressDetail = ({ match }) => {
  let token = Cookies.get('token');
  const { id } = match.params;

  const [addEvent, setAddEvent] = useState({
    eventType: 'eventType',
    date: '',
    details: '',
    customerName: '',
    customerBirth: '',
    customerGender: '',
  });
  const [showModal, setShowModal] = useState(false);
  const { dress, images, events } = useSelector((state) => state.dressReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_DRESS_REQUEST,
      data: {
        dressId: id,
      },
    });
  }, [dispatch, id]);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    // 폼 밸류 디스패치로 서버에 요청 보내기
    // dispatch({});

    setShowModal(false);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log('??', value, name);
    setAddEvent({
      ...addEvent,
      [name]: value,
    });

    console.log(addEvent);
  };

  // const handleRequestClose = () => {
  //   // 닫았을 때, 디스패치로 서버에 데이터 요청 보내기
  //   alert('??');
  // };

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <>
          <div>
            <h2>{`No.${match.params.id} dress's Detail`}</h2>
            <DressDetailInfo dress={dress} images={images} />
            <DressDetailEvent events={events} />
          </div>
          <div>
            <AddEventModal
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
              handleChange={handleChange}
              addEvent={addEvent}
              // handleRequestClose={handleRequestClose}
            />
          </div>
          <div>
            <button type="button">Edit dress</button>
          </div>
        </>
      )}
    </>
  );
};

export default DressDetail;

// match.params로 드레스 아이디 찾아서 해당 드레스의 정보 렌더링

// 1. 드레스 정보 컴포넌트
// 2. 드레스 이벤트 이력 컴포넌트
// 3. 캘린더 컴포넌트
