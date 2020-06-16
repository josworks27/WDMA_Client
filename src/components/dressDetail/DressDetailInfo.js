/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';

const DetailInfoSection = styled.section`
  border: 1px solid ${(props) => props.theme.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Slider = styled.div`
  width: 80%;
  margin-bottom: 30px;
  // height: 200px;
`;

const DressDetailInfo = ({ images, dress }) => {
  return (
    <DetailInfoSection>
      <h1>Dress Infomation</h1>
      <Slider>
        <ImageSlider images={images} />
      </Slider>
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
    </DetailInfoSection>
  );
};

export default DressDetailInfo;
