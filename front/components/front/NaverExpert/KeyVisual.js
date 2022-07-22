import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';
import { useMobile } from 'hook/useIsMobile';

const KeyVisual = ({ subtitle, title1, title2, desc1, desc2 }) => {
	const isMobile = useMobile(false);
	const markUp = (
		<div className="container">
			<div className="txtWrap">
				{/* 텍스트영역 */}
				{subtitle && <h2>{subtitle}</h2>}
				{title1 && <h2>{title1}</h2>}
				{title2 && <h2>{title2}</h2>}
				{desc1 && <p>{desc1}</p>}
				{desc2 && <p>{desc2}</p>}
			</div>
			<div className="imgWrap">
				<img src={`/img/naverexpert/key_bg_mo.jpg`} alt="bg" />
			</div>
		</div>
	);
	return <>{isMobile ? <section css={keyVisualMoStyle}>{markUp}</section> : <section css={keyVisualStyle}>{markUp}</section>}</>;
};

const keyVisualStyle = css`
	width: auto;
	height: 86rem;
	// background-color: #4f6af5;
	background: url('/img/naverexpert/key_bg.jpg');
	background-position: center center;
	& > .container {
		position: relative;
		width: 100%;
		max-width: ${theme.pc.maxwidth};
		height: 100%;
		margin: 0 auto;
		& > .txtWrap {
			position: absolute;
			top: 17rem;
			z-index: 2;
			padding: 0 45rem 6rem 0;
			& > h2 {
				margin: 0.7rem 0;
				padding: 0;
				font-size: 5.8rem;
				font-weight: 800;
				line-height: 1.3;
				color: #fff;
				word-break: keep-all;
			}
			& > p {
				margin: 0;
				padding: 0;
				font-weight: 200;
				font-size: 1.6rem;
				line-height: 2;
				color: #fff;
				opacity: 0.8;
			}
			& > h2 + p {
				margin-top: ${theme.pc.padding.h2p};
			}
		}
		& > .imgWrap {
			overflow: hidden;
			position: relative;
			// z-index: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			img {
				display: none;
				width: 100%;
				height: auto;
				margin: 0 auto;
			}
		}
	}
`;

const keyVisualMoStyle = css`
	width: auto;
	//   height: 46vw;
	background: linear-gradient(0deg, ${theme.color.main}, #7c94fe);
	padding: ${theme.mo.padding.section} 0 0 0;
	& > .container {
		& > .txtWrap {
			padding: 2vw 8vw;
			text-align: center;
			& > h2 {
				font-size: ${theme.mo.size.h2};
				font-weight: 800;
				line-height: 1.2;
				color: #fff;
				word-break: keep-all;
			}
			& > p {
				font-weight: 200;
				font-size: 1.6rem;
				line-height: 1.8;
				color: #fff;
				opacity: 0.8;
				word-break: keep-all;
			}
			& > h2 + p {
				margin-top: ${theme.mo.padding.h2p};
			}
		}
		& > .imgWrap {
			overflow: hidden;
			position: relative;
			// z-index: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			img {
				width: 100%;
				height: auto;
				margin: 0 auto;
			}
		}
	}
`;

export default KeyVisual;
