import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';
import { useMobile } from 'hook/useIsMobile';

const KeyVisual = ({ subtitle1, title1, title2, desc1, desc2 }) => {
	const isMobile = useMobile(false);
	const markUp = (
		<div className="container">
			<div className="txtWrap">
				{/* 텍스트영역 */}
				{subtitle1 && <h2 className="subtitle">{subtitle1}</h2>}
				{title1 && <h2>{title1}</h2>}
				{title2 && <h2>{title2}</h2>}
				{desc1 && <p>{desc1}</p>}
				{desc2 && <p>{desc2}</p>}
			</div>
			<div className="imgWrap">
				<img src={`/img/toss/key_bg_mo.jpg`} alt="bg" />
			</div>
		</div>
	);
	return <>{isMobile ? <section css={keyVisualMoStyle}>{markUp}</section> : <section css={keyVisualStyle}>{markUp}</section>}</>;
};

const keyVisualStyle = css`
	width: auto;
	// background: url('/img/key_bg.jpg');
	& > .container {
		& > .txtWrap {
			& > h2 {
			}
			& > p {
			}
			& > h2 + p {
			}
		}
		& > .imgWrap {
			img {
			}
		}
	}
`;

const keyVisualMoStyle = css`
	// background: linear-gradient(0deg, ${theme.color.main}, #7c94fe);
	background: #3058d2;
	& > .container {
		position: relative;
		height: 70rem;
		& > .txtWrap {
			position: relative;
			z-index: 1;
			padding: 8vw 18vw 2vw 6vw;
			& > h2 {
				font-weight: 800;
				font-size: 17vw;
				color: #fff;
				word-break: keep-all;
				line-height: 1;
				&.subtitle {
					padding: 0 0 5vw 0;
					font-weight: 600;
					font-size: 5vw;
				}
			}
			& > p {
				padding: 5vw 0;
				font-weight: normal;
				font-size: 5vw;
				color: #f2ffff;
				text-decoration: underline;
			}
			& > h2 + p {
			}
		}
		& > .imgWrap {
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 0;
			img {
				width: 100%;
			}
		}
	}
`;

export default KeyVisual;
