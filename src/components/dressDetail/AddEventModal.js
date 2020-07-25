import React from 'react';
import ReactModal from 'react-modal';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import modalStyle from '../../lib/modalStyle';
import 'react-datepicker/dist/react-datepicker.css';
import { AddEventForm, AddEventFormButton } from './dressDetatilStyles';

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
    <ReactModal isOpen={showModal} style={modalStyle}>
      {addEvent.eventType === 'customerRent' ||
      addEvent.eventType === 'fitting' ? (
        <AddEventForm>
          <div className="add-event-form__group">
            <label>Type</label>
            <select name="eventType" onChange={handleChange}>
              <option value="customerRent">Customer rent</option>
              <option value="fitting">Fitting</option>
              <option value="cleaning">Cleaning</option>
              <option value="storeRent">Store rent</option>
            </select>
          </div>
          <div className="add-event-form__group">
            <label>Date</label>
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
          </div>
          <div className="add-event-form__group">
            <label>Details</label>
            <input
              type="text"
              name="details"
              placeholder="Event details"
              onChange={handleChange}
              value={addEvent.details}
            />
          </div>
          <div className="add-event-form__group">
            <label>Name</label>
            <input
              type="text"
              name="customerName"
              placeholder="customer name"
              onChange={handleChange}
              value={addEvent.customerMame}
            />
          </div>
          <div className="add-event-form__group">
            <label>Birthday</label>
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
          </div>
          <div className="add-event-form__group">
            <label>Gender</label>
            <select name="customerGender" onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </AddEventForm>
      ) : (
        <AddEventForm>
          <div className="add-event-form__group">
            <label>Event type</label>
            <select name="eventType" onChange={handleChange}>
              <option value="customerRent">Customer rent</option>
              <option value="fitting">Fitting</option>
              <option value="cleaning">Cleaning</option>
              <option value="storeRent">Store rent</option>
            </select>
          </div>
          <div className="add-event-form__group">
            <label>Date</label>
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
          </div>
          <div className="add-event-form__group">
            <label>Details</label>
            <input
              type="text"
              name="details"
              placeholder="Event details"
              onChange={handleChange}
              value={addEvent.details}
            />
          </div>
        </AddEventForm>
      )}
      <AddEventFormButton>
        <button type="button" onClick={handleSaveModal}>
          Save
        </button>
        <button
          type="button"
          name="close-add-event-modal"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </AddEventFormButton>
    </ReactModal>
  );
};

export default AddEventModal;
