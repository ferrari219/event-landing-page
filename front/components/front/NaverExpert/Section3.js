import React from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Review from 'components/front/NaverExpert/common/Review';
import { useMobile } from 'hook/useIsMobile';

//실제 후기로 보는 엑스퍼트
const Section1 = ({
  id,
  subtitle,
  title1Strong,
  title2Strong,
  title1,
  title2,
  desc1,
  desc2,
  button1,
  button2,
  column,
  review,
}) => {
  const isMobile = useMobile(false);
  const markUp = (
    <>
      <div className="container">
        {
          <h3>
            {title1}
            <strong>{title1Strong}</strong>
          </h3>
        }
        {
          <h3>
            {title2}
            <strong>{title2Strong}</strong>
          </h3>
        }
        {desc1 && <p>{desc1}</p>}
        {desc2 && <p>{desc2}</p>}
        <div>
          {button1 && <button type="button">{button1}</button>}
          {button2 && <button type="button">{button2}</button>}
        </div>
        <div className="review">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={isMobile ? 1 : 3}
            // slidesPerGroup={3}
            navigation={isMobile ? false : true}
            centeredSlides={isMobile ? false : true}
            loop={true}
            // loopFillGroupWithBlank={true} //빈칸으로 메우기
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {/* <div className="reviewWrap">{review && review.map((item) => <Review key={item.id} {...item} />)}</div> */}
            {review &&
              review.map((item) => (
                <SwiperSlide key={item.id}>
                  <Review {...item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
  return (
    <>
      {isMobile ? (
        <section css={SectionMoStyle}>{markUp}</section>
      ) : (
        <section css={SectionStyle}>{markUp}</section>
      )}
    </>
  );
};

Section1.proptypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  review: PropTypes.arrayOf(PropTypes.object),
};

const SectionStyle = css`
overflow: hidden;
	background: linear-gradient(0deg, ${theme.color.main}, #7c94fe);
	& > .container {
		max-width: ${theme.pc.maxwidth};
		margin: 0 auto;
		padding: ${theme.pc.padding.section} 0;
		& > h3 {
			max-width: ${theme.pc.maxwidth};
			margin: 0 auto;
			padding: 0;
			font-size: ${theme.pc.size.h3};
			font-weight: 400;
			color: #fff;
			text-align: center;a
		}
		& > p {
			max-width: ${theme.pc.maxwidth};
			margin: 0 auto;
			padding: 0;
			font-size: ${theme.pc.size.base};
			font-weight: normal;
			line-height: 1.8;
			color: #fff;
			text-align: center;a
			opacity: 0.8;
		}
		& > h3 + p {
			margin-top: ${theme.pc.padding.h3p};
		}
		& > div > button {
			padding: 1rem 0;
			font-size: ${theme.pc.size.base};
			font-weight: 600;
			background: transparent;
			border: none;
			color: #5b5e95;
		}
		& > p + div {
			margin-top: 1.5rem;
		}
		& > .review {
			margin: 0 auto;
			.swiper {
				overflow: visible;
				&-wrapper {
					margin: 0 -1rem;
				}
				&-slide {
					width: 32rem;
					// height: 41rem;
					opacity: 0.6;
					&-prev,
					&-active,
					&-next {
						opacity: 1;
					}
				}
				&-button-prev {
					left: -10rem;
					width: 5rem;
					height: 5rem;
					padding: 1rem;
					background-color: #fff;
					border-radius: 50%;
					&::after {
						font-weight: bold;
						font-size: 2.4rem;
					}
				}
				&-button-next {
					right: -10rem;
					width: 5rem;
					height: 5rem;
					padding: 1rem;
					background-color: #fff;
					border-radius: 50%;
					&::after {
						font-weight: bold;
						font-size: 2.4rem;
					}
				}				
			}
		}
	}
`;
const SectionMoStyle = css`
	overflow:hidden;
	width: 100%;
	padding: 0 ${theme.mo.padding.width};
	background: linear-gradient(0deg, ${theme.color.main}, #7c94fe);
	& > .container {
		padding: ${theme.mo.padding.section} 0;
		& > h3 {
			max-width: ${theme.mo.maxwidth};
			margin: 0 auto;
			padding: 0;
			font-size: ${theme.mo.size.h3};
			font-weight: 400;
			color: #fff;
			text-align: center;
		}
		& > p {
			max-width: ${theme.mo.maxwidth};
			margin: 0 auto;
			padding: 0;
			font-size: ${theme.mo.size.base};
			font-weight: normal;
			line-height: 1.8;
			color: #fff;
			text-align: center;a
			opacity: 0.8;
		}
		& > h3 + p {
			margin-top: ${theme.mo.padding.h3p};
		}
		& > div > button {
			padding: 1rem 0;
			font-size: ${theme.mo.size.base};
			font-weight: 600;
			background: transparent;
			border: none;
			color: #5b5e95;
		}
		& > p + div {
			margin-top: 1.5rem;
		}
		& > .review {
			// max-width: ${theme.mo.maxwidth};
			// margin: 0 auto;
			.swiper {
				overflow: visible;
				&-wrapper {
					// padding: 0 -2vw;
				}
				&-slide {
					width: 30vw;
					// margin: 0 1rem;
					// height: 41rem;
					// opacity: 0.6;
					// &-prev,
					// &-active,
					// &-next {
					// 	opacity: 1;
					// }
				}				
			}
		}
	}
`;

export default Section1;
