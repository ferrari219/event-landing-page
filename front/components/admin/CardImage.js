import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImageZoom from './ImageZoom';
import { css } from '@emotion/react';
import { Button } from 'antd';
import theme from 'assets/styles/theme';

const CardImage = ({ images }) => {
  const [zoom, setZoom] = useState(false);
  const onZoom = useCallback(() => {
    setZoom(true);
  }, [zoom]);
  const onClose = useCallback(() => {
    setZoom(false);
  }, [zoom]);

  return (
    <>
      <div css={CardImageStyle}>
        <div className="imgMain">
          <img
            role="presentation"
            src={`${images[0].src}`}
            alt={images[0].src}
            onClick={onZoom}
          />
        </div>
        <div className="imgBtn" role="presentation">
          <Button type="button" icon={<PlusOutlined />} onClick={onZoom}>
            더보기
          </Button>
        </div>
      </div>
      {zoom && <ImageZoom images={images} onClose={onClose} />}
    </>
  );
};
CardImage.prototypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

const CardImageStyle = css`
  position: relative;
  // display: flex;
  // flex-flow: row wrap;
  // border: 5px solid red;
  & > .imgMain {
    width: 100%;
    img {
      width: 100%;
    }
  }
  & > .imgBtn {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 6rem;
    height: 6rem;
    & > button {
      display: block;
      width: 100%;
      height: 100%;
      & > span {
        display: block;
        margin: 0;
        padding: 0;
        font-size: ${theme.pc.size.sm};
      }
    }
  }
`;

export default CardImage;
