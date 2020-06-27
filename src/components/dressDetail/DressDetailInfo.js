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
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 30px;
  // height: 200px;
`;

const Contents = styled.div`
  border: 1px solid blue;
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Section = styled.section`
  border: 1px solid yellow;
  width: 100%;
`;
const Article = styled.article`
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DressDetailInfo = ({ images, dress }) => {
  return (
    <DetailInfoSection>
      <h1>Dress Infomation</h1>
      <Slider>
        <ImageSlider images={images} />
      </Slider>
      <Contents>
        <Section>
          <Article>
            <h1>Model</h1>
            <span>{dress.model}</span>
          </Article>
          <Article>
            <h1>Price</h1>
            <span>{dress.price}</span>
          </Article>
          <Article>
            <h1>Store</h1>
            <span>{dress['store.name']}</span>
          </Article>
        </Section>
        <Section>
          <Article>
            <h1>Accessory</h1>
            <span>{dress.accessoryOne}</span>
            <span>{dress.accessoryTwo}</span>
            <span>{dress.accessoryThree}</span>
          </Article>
        </Section>
      </Contents>
    </DetailInfoSection>
  );
};

export default DressDetailInfo;
