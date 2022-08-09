import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const ImageZoom = ({ images }) => {
  return (
    <div>
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
      >
        {/* <div className="reviewWrap">{review && review.map((item) => <Review key={item.id} {...item} />)}</div> */}
        {images &&
          images.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.src} alt={item.src} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ImageZoom;
