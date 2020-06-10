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
              <lable>Model</lable>
              <h1>{dress.model}</h1>
            </div>
            <div className="content__price">
              <lable>Price</lable>
              <span>{dress.price}</span>
            </div>
            <div className="content__store">
              <lable>Store</lable>
              <span>{dress['store.name']}</span>
            </div>
            <div className="content__accessory">
              <lable>Accessory</lable>
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
