/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Coverflow from 'react-coverflow';

const DressDetailInfo = ({ images, dress }) => {
  return (
    <>
      <div>
        <h3>Dress Info</h3>
        <Coverflow height={350} displayQuantityOfSide={2} enableHeading={false}>
          <div role="menuitem" tabIndex="0" />
          {images.map((img) => {
            return <img src={img.filePath} alt="" />;
          })}
        </Coverflow>
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
