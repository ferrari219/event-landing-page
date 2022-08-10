import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { css } from '@emotion/react';
import { Button } from 'antd';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { CloseOutlined } from '@ant-design/icons';
import theme from 'assets/styles/theme';

const ImageZoom = ({ images, onClose }) => {
  return (
    <div css={imgZoomStyle}>
      <div className="header">
        <h1>상세 이미지</h1>
        <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        // slidesPerGroup={3}
        navigation={true}
        loop={true}
        // loopFillGroupWithBlank={true} //빈칸으로 메우기
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className="swiper"
      >
        {/* <div className="reviewWrap">{review && review.map((item) => <Review key={item.id} {...item} />)}</div> */}
        {images &&
          images.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.src.replace()} alt={item.src} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
const imgZoomStyle = css`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & > .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 4rem;
    padding: 0;
    background: white;
    text-align: center;
    h1 {
      font-size: ${theme.pc.size.base};
    }
    & > button {
      position: absolute;
      right: 0;
      top: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & > .swiper {
    height: calc(100% - 4rem);
    background: #090909;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: auto;
      height: 100%;
      max-height: 40rem;
    }
  }
`;

export default ImageZoom;
