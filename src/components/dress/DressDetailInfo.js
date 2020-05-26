import React from 'react';

const DressDetailInfo = ({ match, images, dress }) => {
  return (
    <>
      <div>
        <h3>Dress Info</h3>
        <div>
          {images.map((image) => (
            <img key={image.id} src={image.filePath} alt="" />
          ))}
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
