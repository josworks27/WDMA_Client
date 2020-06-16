import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 300px;
`;

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {images.length ? (
        images.map((image) => {
          return (
            <div key={image.id}>
              <Image src={image.filePath} alt="dress-image" />
            </div>
          );
        })
      ) : (
        <Image src="/images/bg.jpeg" alt="dress-image" />
      )}
    </Slider>
  );
};

export default ImageSlider;
