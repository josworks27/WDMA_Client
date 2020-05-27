import React, { useState } from 'react';
import ReactModal from 'react-modal';

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

const AddEventModal = ({
  showModal,
  handleCloseModal,
  handleOpenModal,
  handleChange,
  addEvent,
  //   handleRequestClose,
}) => {
  return (
    <>
      <div>
        <button type="button" onClick={handleOpenModal}>
          Create event
        </button>
        <ReactModal
          isOpen={showModal}
          style={customStyles}
          //   onRequestClose={handleRequestClose}
        >
          <form>
            <select name="eventType" onChange={handleChange}>
              <option value="customerRent">Customer rent</option>
              <option value="fitting">Fitting</option>
              <option value="cleaning">Cleaning</option>
              <option value="storeRent">Store rent</option>
            </select>
            <input
              type="text"
              name="details"
              placeholder="Event details"
              onChange={handleChange}
              value={addEvent.details}
            />
          </form>
          <button type="button" onClick={handleCloseModal}>
            Save an event
          </button>
        </ReactModal>
      </div>
    </>
  );
};

export default AddEventModal;
