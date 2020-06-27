import React, { useState } from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 250px;
  margin-bottom: 5px;
`;

const Buttons = styled.div`
  display: flex;
  button {
    margin: 0 5px;
  }
`;

const ImageSlider = ({ images }) => {
  const [imageNum, setImageNum] = useState(0);

  const handleClick = (event) => {
    const { name } = event.target;
    if (name === 'prev') {
      if (imageNum === 0) {
        setImageNum(images.length - 1);
      } else {
        setImageNum((data) => data - 1);
      }
    } else if (imageNum === images.length - 1) {
      setImageNum(0);
    } else {
      setImageNum((data) => data + 1);
    }
  };

  return (
    <>
      {images.length ? (
        <SliderWrapper>
          <Image src={images[imageNum].filePath} alt="dress-image" />
          {images.length > 1 ? (
            <Buttons onClick={handleClick}>
              <button type="button" name="prev">
                Prev
              </button>
              <button type="button" name="next">
                Next
              </button>
            </Buttons>
          ) : null}
        </SliderWrapper>
      ) : (
        <Image src="/images/bg.jpeg" alt="dress-image" />
      )}
    </>
  );
};

export default ImageSlider;
