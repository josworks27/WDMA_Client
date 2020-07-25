/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ImageSlider from './ImageSlider';
import {
  DetailInfoSection,
  Slider,
  Contents,
  Section,
  Article,
} from './dressDetatilStyles';

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
        </Section>
        <Section>
          <Article>
            <h1>Store</h1>
            <span>{dress['store.name']}</span>
          </Article>
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
