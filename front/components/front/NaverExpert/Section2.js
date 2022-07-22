import React from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

import { useMobile } from 'hook/useIsMobile';
import H4TxtModule from 'components/front/NaverExpert/common/H4TxtModule';

//언제 어디서든 1:1 상담
const Section2 = ({ id, subtitle, title1Strong, title2Strong, title1, title2, desc1, desc2, button1, button2, lnk1, lnk2 }) => {
	const isMobile = useMobile(false);
	const markUp = (
		<div className="container">
			{
				<h3>
					<strong>{title1Strong}</strong>
					{title1}
				</h3>
			}
			{
				<h3>
					<strong>{title2Strong}</strong>
					{title2}
				</h3>
			}
			{desc1 && <p>{desc1}</p>}
			{desc2 && <p>{desc2}</p>}
			<div className="buttonWrap">
				{button1 && <button type="button">{button1}</button>}
				{button2 && <button type="button">{button2}</button>}
			</div>
		</div>
	);
	return <>{isMobile ? <section css={SectionMoStyle}>{markUp}</section> : <section css={SectionStyle}>{markUp}</section>}</>;
};

Section2.proptypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
};

const SectionStyle = css`
	background-color: ${theme.color.light.bg};
	& > .container {
		max-width: ${theme.pc.maxwidth};
		margin: 0 auto;
		padding: ${theme.pc.padding.section} 0;
		background: url('/img/naverexpert/sec2_img1.jpg');
		background-position: right center;
		background-repeat: no-repeat;
		& > h3 {
			margin: 0;
			padding: 0;
			font-size: 5.2rem; //${theme.pc.size.h3};
			font-weight: 600;
			color: ${theme.color.def};
		}
		& > p {
			margin: 0;
			padding: 0;
			font-size: ${theme.pc.size.base};
			font-weight: 200;
			line-height: 1.8;
			color: ${theme.color.def};
		}
		& > h3 + p {
			margin-top: ${theme.pc.padding.h3p};
		}
		& > .buttonWrap > button {
			padding: 1rem 0;
			font-size: ${theme.pc.size.base};
			font-weight: 600;
			background: transparent;
			border: none;
			color: #5b5e95;
		}
	}
`;
const SectionMoStyle = css`
	background-color: ${theme.color.light.bg};
	& > .container {
		width: 100%;
		padding: ${theme.mo.padding.section} ${theme.mo.padding.width};
		& > h3 {
			font-size: ${theme.mo.size.h3};
			font-weight: 600;
			color: ${theme.color.def};
			line-height: 1.1;
			word-break: keep-all;
		}
		& > h3 + h3 {
			padding: 2vw 0 0 0;
		}
		& > p {
			margin: 0;
			padding: 0;
			font-size: ${theme.mo.size.base};
			font-weight: 200;
			line-height: 1.8;
			color: ${theme.color.def};
		}
		& > h3 + p {
			margin-top: ${theme.mo.padding.h3p};
		}
		& > .buttonWrap > button {
			padding: 1rem 0;
			font-size: ${theme.mo.size.base};
			font-weight: 600;
			background: transparent;
			border: none;
			color: #5b5e95;
		}
	}
`;

export default Section2;
