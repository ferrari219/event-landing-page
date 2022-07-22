import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';
import { useMobile } from 'hook/useIsMobile';

// import { Mobile, PC } from 'hook/useIsMobile';

//생활에 필요한 모든 상담이 있는곳
const Section4 = ({ id, subtitle, title1Strong, title2Strong, title1, title2, desc1, desc2, button1, button2, column }) => {
	const isMobile = useMobile(false);

	const markUp = (
		<>
			<div className="container">
				<div className="left">
					{title1Strong && (
						<h3>
							<strong>{title1Strong}</strong>
							{title1}
						</h3>
					)}
					{title2Strong && (
						<h3>
							<strong>{title2Strong}</strong>
							{title2}
						</h3>
					)}
				</div>
				<div className="right">
					{desc1 && <p>{desc1}</p>}
					{desc2 && <p>{desc2}</p>}
				</div>
			</div>
			<div className="pic">
				<img src="/img/naverexpert/sec4_img1.jpg" alt="" />
			</div>
		</>
	);
	return <>{isMobile ? <section css={SectionMoStyle}>{markUp}</section> : <section css={SectionStyle}>{markUp}</section>}</>;
};

Section4.proptypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
	desc1: PropTypes.string,
	desc2: PropTypes.string,
	column: PropTypes.arrayOf(PropTypes.object),
};

const SectionStyle = css`
	margin: ${theme.pc.padding.section} 0;
	& > .container {
		display: flex;
		flex-direction: row;
		max-width: ${theme.pc.maxwidth};
		margin: 0 auto;
		padding: ${theme.pc.padding.section} 0 0 0;
		& > .left {
			padding: 0 12rem 0 0;
			& > h3 {
			}
		}
		& > .right {
			flex-shrink: 0;
			width: 55rem;
		}
		& > .left,
		& > .right {
			& > h3 {
				font-size: 5.6rem; //${theme.pc.size.h3};
				font-weight: 600;
				line-height: 1.2;
				color: ${theme.color.def};
			}
			& > p {
				margin: 0;
				padding: 0;
				font-size: ${theme.pc.size.base};
				font-weight: 200;
				line-height: 2;
				color: ${theme.color.def};
			}
			& > h3 + p {
				margin-top: ${theme.pc.padding.h3p};
			}
		}
	}
	& > .pic {
		width: 100%;
		margin: 2rem 0;
		background: url('/img/naverexpert/sec4_bg1.jpg');
		background-repeat: repeat-x;
		text-align: center;
		img {
			max-width: ${theme.pc.maxwidth};
			margin: 0 auto;
		}
	}
`;
const SectionMoStyle = css`
	& > .container {
		width: 100%;
		padding: ${theme.mo.padding.section} ${theme.mo.padding.width};
		& > .left,
		& > .right {
			& > h3 {
				font-size: ${theme.mo.size.h3};
				font-weight: 600;
				line-height: 1.2;
				letter-spacing: -0.3rem;
				color: ${theme.color.def};
				word-break: keep-all;
			}
			& > p {
				font-size: ${theme.mo.size.base};
				font-weight: 200;
				line-height: 2;
				color: ${theme.color.def};
				word-break: keep-all;
			}
			& > h3 + p {
				margin-top: ${theme.mo.padding.h3p};
			}
		}
		& > .left + .right {
			margin-top: ${theme.mo.padding.h3p};
		}
	}
	.pic {
		img {
			width: 100%;
		}
	}
`;

export default Section4;
