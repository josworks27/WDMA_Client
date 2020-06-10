import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
              <img src={image.filePath} alt="" />
            </div>
          );
        })
      ) : (
        <div>없음</div>
      )}
    </Slider>
  );
};

export default ImageSlider;
