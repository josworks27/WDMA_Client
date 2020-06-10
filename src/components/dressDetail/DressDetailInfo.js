/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ImageSlider from './ImageSlider';

const DressDetailInfo = ({ images, dress }) => {
  return (
    <>
      <section className="dress-info">
        <h1>Dress Info</h1>
        <div className="dress-info__slider">
          <ImageSlider images={images} />
        </div>
        <div className="dress-info__content">
          <div className="wrapper">
            <div className="content__model">
              <span>Model</span>
              <span>{dress.model}</span>
            </div>
            <div className="content__price">
              <span>Price</span>
              <span>{dress.price}</span>
            </div>
            <div className="content__store">
              <span>Store</span>
              <span>{dress['store.name']}</span>
            </div>
            <div className="content__accessory">
              <span>Accessory</span>
              <span>{dress.accessoryOne}</span>
              <span>{dress.accessoryTwo}</span>
              <span>{dress.accessoryThree}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DressDetailInfo;
