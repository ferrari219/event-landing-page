import React from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImageZoom from './ImageZoom';

const CardImage = ({ images }) => {
  return (
    <>
      <div>
        <img
          role="presentation"
          style={{ width: '50%' }}
          src={`${images[0].src}`}
          alt={images[0].src}
          // onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
          // onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      <ImageZoom images={images} />
    </>
  );
};
CardImage.prototypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default CardImage;
