import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PostForm from 'components/front/NaverExpert/PostForm';
import KeyVisual from 'components/front/NaverExpert/KeyVisual';
import Section1 from 'components/front/NaverExpert/Section1';
import Section2 from 'components/front/NaverExpert/Section2';
import Section3 from 'components/front/NaverExpert/Section3';
import Section4 from 'components/front/NaverExpert/Section4';
import Section5 from 'components/front/NaverExpert/Section5';

// Front Promotion Page
const Home = () => {
	return (
		<div css={HomeStyle}>
			<KeyVisual {...data.KeyVisual} />
			<Section1 {...data.section1} />
			<Section2 {...data.section2} />
			<Section3 {...data.section3} />
			<Section4 {...data.section4} />
			<Section5 {...data.section5} />
			<PostForm />
		</div>
	);
};

const data = {
	KeyVisual: {
		subtitle: '',
		title1: '직접 만나기 어렵던 전문가, 엑스퍼트에서 쉽게 만나세요',
		// title2: '',
		desc1: '지식iN 엑스퍼트는 모바일 환경에서 쾌적한 사용이 가능합니다.',
		desc2: '지금 모바일에서 전문 상담을 받아보세요!',
		bg: '',
	},
	section1: {
		title1Strong: '지식iN 엑스퍼트',
		title1: ' 소개',
		column: [
			{
				id: 0,
				sttl1Strong: '지식iN 엑스퍼트',
				sttl1: '란?',
				sdesc1: '바쁜 일상에 대면 상담이 부담스러우신가요? 법률 소액소송, 세무, 심리상담 등 전문분야부터 피트니스, 번역, 뷰티, 인테리어, 원예 같은 일상분야까지! 1:1 채팅을 통해 전문가와 실시간으로 상담을 나눌 수 있습니다.',
			},
			{
				id: 1,
				sttl1Strong: '엑스퍼트',
				sttl1: '는 어떤사람인가요?',
				sdesc1: '각 분야의 전문 지식이 있는 분들이 엑스퍼트로 활동하고 있습니다. 검증된 전문 자격증, 전문가를 확인해 줄 수 있는 제휴처 등을 통해 선발된 엑스퍼트들이 상담을 진행합니다. 각 주제 별 전문가들의 자격을 엑스퍼트 프로필에서 확인해보세요! ',
				sbtn1: '엑스퍼트 신청 안내 자세히보기',
				lnk1: '#',
			},
		],
	},
	section2: {
		title1Strong: '언제 어디서든,',
		title2Strong: '1:1 상담 가능합니다.',
		desc1: '궁금한 사항이 생기면 ',
		desc2: '전문가와 1:1상담으로 궁금한 점을 해결할 수 있어요.',
		button1: '사용가이드 자세히보기',
	},
	section3: {
		title1: '실제 후기로 보는',
		title1Strong: ' 엑스퍼트',
		desc1: '이용자들이 남긴 후기로 엑스퍼트 상담 체험을 해보세요. 지식iN 엑스퍼트 서비스 화면에서 더 많은 상담 후기를 확인 할 수 있습니다.',
		review: [
			{
				id: 0,
				name: '권진형',
				cate: '법률 > 노무',
				pic: '/img/naverexpert/sec3_p1.jpg',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 1,
				name: '진선주',
				cate: '법률 > 노무',
				pic: '/img/naverexpert/sec3_p2.jpg',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 2,
				name: '박보형',
				cate: '법률 > 노무',
				pic: '/img/naverexpert/sec3_p3.jpg',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 3,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 4,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 5,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 6,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 7,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 8,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 9,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 10,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
			{
				id: 11,
				name: '김선형',
				cate: '법률 > 노무',
				score: 5,
				content: '답답한 마음에 노무사님과 상담하게 되었는데 명확하고 친절하게 상담해주셔서 어떻게 처리해야 되는지 알게 되었습니다. 저처럼 갑갑하신 분들은 노무사님과의 상담을 추천드립니다. 감사합니다.',
			},
		],
	},
	section4: {
		title1Strong: '생활에 필요한 모든 상담이 있는 곳',
		desc1: '지식iN 엑스퍼트에서는 법률, 소송, 세무와 같은 전문 분야부터, 피트니스, 번역, 뷰티, 인테리어 같은 일상 분야까지 다양한 분야의 상담이 가능합니다. 엑스퍼트의 다양한 주제들은 사용자들의 의견을 받아 지속적으로 확대되고 있습니다. 상담분야를 확인하고 생활에 필요한 모든 상담을 지식iN 엑스퍼트와 함께하세요!',
	},
	section5: {
		title1: '엑스퍼트에 대한 정보가 더 필요한가요?',
		button1: 'expert 공식 블로그',
		button2: '가이드 자세히 보기',
	},
};

const HomeStyle = css`
	min-width: 36rem;
`;

export default Home;
