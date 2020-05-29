/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ImageSlider from './ImageSlider';

const DressDetailInfo = ({ images, dress }) => {
  return (
    <>
      <div>
        <h3>Dress Info</h3>
        <div>
          <ImageSlider images={images} />
        </div>
        <div>{dress.model}</div>
        <div>{dress.price}</div>
        <div>{dress['store.name']}</div>
        <div>{dress.accessoryOne}</div>
        <div>{dress.accessoryTwo}</div>
        <div>{dress.accessoryThree}</div>
      </div>
    </>
  );
};

export default DressDetailInfo;
