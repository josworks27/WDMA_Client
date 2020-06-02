import React from 'react';
import ReactModal from 'react-modal';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';

import modalStyle from '../../lib/modalStyle';
import 'react-datepicker/dist/react-datepicker.css';

// Register React-datepicker
registerLocale('ja', ja);
setDefaultLocale('ja');

const AddEventModal = ({
  showModal,
  handleCloseModal,
  handleSaveModal,
  handleChange,
  addEvent,
  setAddEvent,
}) => {
  return (
    <>
      <div>
        <ReactModal isOpen={showModal} style={modalStyle}>
          {addEvent.eventType === 'customerRent' ||
          addEvent.eventType === 'fitting' ? (
            <form>
              <span>Event type: </span>
              <select name="eventType" onChange={handleChange}>
                <option value="customerRent">Customer rent</option>
                <option value="fitting">Fitting</option>
                <option value="cleaning">Cleaning</option>
                <option value="storeRent">Store rent</option>
              </select>
              <br />
              <span>Date: </span>
              <DatePicker
                // 데이트픽커 시작 날짜
                selected={addEvent.date}
                // 날짜 선택시 호출되는 함수
                onChange={(date) => {
                  setAddEvent({
                    ...addEvent,
                    date,
                  });
                }}
                dateFormat="yyyy MMMM d"
              />
              <br />
              <span>Details: </span>
              <input
                type="text"
                name="details"
                placeholder="Event details"
                onChange={handleChange}
                value={addEvent.details}
              />
              <div>
                <span>Customer name: </span>
                <input
                  type="text"
                  name="customerName"
                  placeholder="customer name"
                  onChange={handleChange}
                  value={addEvent.customerMame}
                />
                <br />
                <span>Customer Birthday: </span>
                <DatePicker
                  selected={addEvent.customerBirth}
                  onChange={(date) => {
                    setAddEvent({
                      ...addEvent,
                      customerBirth: date,
                    });
                  }}
                  dateFormat="yyyy MMMM d"
                />
                <br />
                <span>Customer gender: </span>
                <select name="customerGender" onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </form>
          ) : (
            <form>
              <span>Event type: </span>
              <select name="eventType" onChange={handleChange}>
                <option value="customerRent">Customer rent</option>
                <option value="fitting">Fitting</option>
                <option value="cleaning">Cleaning</option>
                <option value="storeRent">Store rent</option>
              </select>
              <br />
              <span>Date: </span>
              <DatePicker
                selected={addEvent.date}
                onChange={(date) => {
                  setAddEvent({
                    ...addEvent,
                    date,
                  });
                }}
                dateFormat="yyyy MMMM d"
              />
              <br />
              <span>Details: </span>
              <input
                type="text"
                name="details"
                placeholder="Event details"
                onChange={handleChange}
                value={addEvent.details}
              />
            </form>
          )}

          <button type="button" onClick={handleSaveModal}>
            Save an event
          </button>
          <button
            type="button"
            name="close-add-event-modal"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </ReactModal>
      </div>
    </>
  );
};

export default AddEventModal;
