import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PostForm from 'components/front/Toss/PostForm';
import KeyVisual from 'components/front/Toss/KeyVisual';
import Section1 from 'components/front/Toss/Section1';
import Section2 from 'components/front/Toss/Section2';
import Section3 from 'components/front/Toss/Section3';

// Front Promotion Page
const Home = () => {
	return (
		<div css={HomeStyle}>
			<KeyVisual {...data.KeyVisual} />
			<Section1 {...data.section1} />
			<Section2 {...data.section2} />
			<Section3 {...data.section3} />
			<PostForm />
		</div>
	);
};

const data = {
	KeyVisual: {
		subtitle1: 'Toss X 여기어때',
		title1: '누구나 토스 3천원할인',
		// title2: '',
		desc1: '10월 한달 내내 누구나',
		// desc2: '',
		bg: '',
	},
	section1: {
		// title1Strong: '',
		title1: '숙소 예약할때 추가 할인 받으세요',
		desc1: '(기간 내 1인 1회 한정)',
		alt1: '전숙소 3,000원 / 5만원 이상 결제시',
		img1: '',
		info: [
			{
				id: 0,
				dt: '이벤트 기간',
				dd: '2022.3.19~3.31',
			},
			{
				id: 1,
				dt: '대상',
				dd: '기간 내 ',
				ddStrong: 'TOSS 로 5만원 이상 숙소 결제한 회원',
			},
			{
				id: 2,
				dt: '할인혜택',
				dd: '결제 시 3천원 즉시 할인',
				desc: '기간 내 1인 할인',
			},
		],
	},
	section2: {
		subtitle1: '참 쉬워요-',
		title1: '이벤트 참여방법',
		desc1: '여기어때 숙소 예약 시',
		desc2: '결제수단에서 Toss를 선택하면 완료!',
		img1: '',
		info: ['결제 수단에서 TOSS 선택 &lt; 토스 신규계좌 등록 후 결제 또는 등록된 토스 계좌로 결제'],
		button1: '숙소 예약하러 가기',
	},
	section3: {
		title1: '이벤트 유의사항',
		// title1Strong: '',
		// desc1: '',
		info: [
			{
				id: 0,
				li: '본 이벤트는 여기어때 예약 시 TOSS 머니로 5만원 이상 결제한 고객을 대상으로 진행됩니다.',
			},
			{
				id: 1,
				li: '기간 내 TOSS로 1인 1회에 한정하여 할인 됩니다.',
			},
			{
				id: 1,
				li: '여기어때 TOSS 결제를 위해서는 토스 앱 다운로드 후 토스 신규계좌등록이 필요합니다.(*기존 토스 앱 내 계좌 등록자는 바로 결제 가능)',
			},
			{
				id: 1,
				li: '즉시할인은 TOSS 결제창에서 바로 적용됩니다.',
			},
			{
				id: 1,
				li: '본 이벤트는 제휴사 및 여기어때 당사 사정에 따라 사전 공지 없이 변경되거나 조기 종료 될 수 있습니다.',
			},
		],
	},
};

const HomeStyle = css`
	min-width: 36rem;
`;

export default Home;
