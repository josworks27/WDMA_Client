import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import DressDetailInfo from './DressDetailInfo';
import DressDetailEvent from './DressDetailEvent';
import AddEventModal from './AddEventModal';
import EditDressModal from './EditDressModal';
import {
  GET_DRESS_REQUEST,
  POST_EVENT_REQUEST,
  DELETE_DRESS_REQUEST,
} from '../../store/modules/dress/dress';

const DressDetail = ({ match, history }) => {
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
  const {
    dress,
    images,
    events,
    eventId,
    deleteDress,
    postEventError,
  } = useSelector((state) => state.dressReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_DRESS_REQUEST,
      data: {
        dressId: id,
      },
    });
  }, [dispatch, id, eventId]);

  useEffect(() => {
    if (deleteDress) {
      history.push('/dress');
    }
  }, [history, deleteDress]);

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

  // Delete dress 팝업창
  const handleDelete = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch({
              type: DELETE_DRESS_REQUEST,
              data: {
                dressId: id,
              },
            });
          },
        },
        {
          label: 'No',
          onClick: () => {
            console.log('did not confirm');
          },
        },
      ],
    });
  };

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <main>
          <DressDetailInfo dress={dress} images={images} />
          <DressDetailEvent events={events} />
          <div className="dress-buttons">
            <AddEventModal
              showModal={showAddEventModal}
              handleSaveModal={handleSaveModal}
              handleCloseModal={handleCloseModal}
              handleChange={handleChange}
              addEvent={addEvent}
              setAddEvent={setAddEvent}
            />
            <button
              type="button"
              name="add-event-button"
              onClick={handleOpenModal}
            >
              Add event
            </button>
            <EditDressModal
              match={match}
              showModal={showEditDressModal}
              setShowModal={setShowEditDressModal}
              handleCloseModal={handleCloseModal}
              dress={dress}
            />
            <button
              type="button"
              name="edit-dress-button"
              onClick={handleOpenModal}
            >
              Edit dress
            </button>
            <button
              type="button"
              name="delete-dress-button"
              onClick={handleDelete}
            >
              Delete dress
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export default DressDetail;
