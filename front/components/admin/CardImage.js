import React from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImageZoom from './ImageZoom';
import { css } from '@emotion/react';

const CardImage = ({ images }) => {
  return (
    <>
      <div css={CardImageStyle}>
        <div className="left">
          <img
            role="presentation"
            src={`${images[0].src}`}
            alt={images[0].src}
            // onClick={onZoom}
          />
        </div>
        <div
          className="right"
          role="presentation"
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

const CardImageStyle = css`
  display: flex;
  flex-flow: row wrap;
  // border: 5px solid red;
  & > div {
    flex: 1;
  }
  img {
    width: 100%;
  }
`;

export default CardImage;
