import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import DressDetailInfo from './DressDetailInfo';
import DressDetailEvent from './DressDetailEvent';
import AddEventModal from './AddEventModal';
import {
  GET_DRESS_REQUEST,
  POST_EVENT_REQUEST,
} from '../../store/modules/dress/dress';
import EditDressModal from './EditDressModal';

const DressDetail = ({ match }) => {
  let token = Cookies.get('token');
  const { id } = match.params;

  const [addEvent, setAddEvent] = useState({
    eventType: 'customerRent',
    date: new Date(),
    details: '',
    customerName: '',
    customerBirth: new Date(),
    customerGender: 'Male',
  });
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showEditDressModal, setShowEditDressModal] = useState(false);
  const { dress, images, events, eventId, postEventError } = useSelector(
    (state) => state.dressReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_DRESS_REQUEST,
      data: {
        dressId: id,
      },
    });
  }, [dispatch, id, eventId]);

  const handleOpenModal = (event) => {
    if (event.target.name === 'add-event-button') {
      setShowAddEventModal(true);
    } else {
      setShowEditDressModal(true);
    }
  };

  const handleCloseModal = (event) => {
    // 다음 작업을 위해 state 초기화
    if (event.target.name === 'close-add-event-modal') {
      setAddEvent({
        ...addEvent,
        eventType: 'customerRent',
        date: new Date(),
        details: '',
        customerName: '',
        customerBirth: new Date(),
        customerGender: 'Male',
      });

      setShowAddEventModal(false);
    } else {
      setShowEditDressModal(false);
    }
  };

  const handleSaveModal = () => {
    if (
      addEvent.eventType === 'cleaning' ||
      addEvent.eventType === 'storeRent'
    ) {
      setAddEvent({
        ...addEvent,
        customerName: '',
        customerBirth: new Date(),
        customerGender: 'Male',
      });
    }

    // 폼 밸류 디스패치로 서버에 요청 보내기
    dispatch({
      type: POST_EVENT_REQUEST,
      data: {
        dressId: id,
        eventType: addEvent.eventType,
        date: `${addEvent.date.getFullYear()}-${
          addEvent.date.getMonth() + 1
        }-${addEvent.date.getDate()}`,
        details: addEvent.details,
        customerName: addEvent.customerName,
        customerBirth: `${addEvent.customerBirth.getFullYear()}-${
          addEvent.customerBirth.getMonth() + 1
        }-${addEvent.customerBirth.getDate()}`,
        customerGender: addEvent.customerGender,
      },
    });

    // 다음 작업을 위해 state 초기화
    setAddEvent({
      ...addEvent,
      eventType: 'customerRent',
      date: new Date(),
      details: '',
      customerName: '',
      customerBirth: new Date(),
      customerGender: 'Male',
    });

    // 에러가 있을 경우 경고
    if (postEventError) {
      alert(postEventError);
    } else {
      // 아니면 정상적으로 모달창 종료
      setShowAddEventModal(false);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setAddEvent({
      ...addEvent,
      [name]: value,
    });
  };

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
              showModal={showAddEventModal}
              handleSaveModal={handleSaveModal}
              handleCloseModal={handleCloseModal}
              handleChange={handleChange}
              addEvent={addEvent}
              setAddEvent={setAddEvent}
              // handleSelected={handleSelected}
            />
          </div>
          <button
            type="button"
            name="add-event-button"
            onClick={handleOpenModal}
          >
            Add event
          </button>
          <div>
            <EditDressModal
              showModal={showEditDressModal}
              handleCloseModal={handleCloseModal}
              dress={dress}
              // handleChange={}
            />
            <button
              type="button"
              name="edit-dress-button"
              onClick={handleOpenModal}
            >
              Edit dress
            </button>
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
