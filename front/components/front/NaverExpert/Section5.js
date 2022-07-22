import React from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

import { useMobile } from 'hook/useIsMobile';

//엑스퍼트에 대한 정보가 더 필요한가요?
const Section5 = ({ id, subtitle, title1Strong, title2Strong, title1, title2, desc1, desc2, button1, button2, lnk1, lnk2 }) => {
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
				{button1 && (
					<button type="button" className="primary">
						{button1}
					</button>
				)}
				{button2 && <button type="button">{button2}</button>}
			</div>
		</div>
	);
	return <>{isMobile ? <section css={SectionMoStyle}>{markUp}</section> : <section css={SectionStyle}>{markUp}</section>}</>;
};

Section5.proptypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
};

const SectionStyle = css`
	background: linear-gradient(90deg, #7c94fe, ${theme.color.main});
	& > .container {
		max-width: ${theme.pc.maxwidth};
		margin: 0 auto;
		padding: ${theme.pc.padding.section} 0;
		& > h3 {
			margin: 0;
			padding: 0;
			font-size: ${theme.pc.size.h3};
			font-weight: 600;
			color: #fff;
			text-align: center;
		}
		& > p {
			margin: 0;
			padding: 0;
			font-size: ${theme.pc.size.base};
			font-weight: 200;
			line-height: 1.8;
			color: #fff;
			text-align: center;
			opacity: 0.8;
		}
		& > h3 + p {
			margin-top: ${theme.pc.padding.h3p};
		}
		& > .buttonWrap {
			text-align: center;
			& > button {
				margin: 0 0.5rem;
				padding: 1rem 2rem;
				font-size: ${theme.pc.size.base};
				font-weight: 600;
				background-color: #97a8ff;
				border-radius: 0.8rem;
				border: none;
				color: #fff;
				&.primary {
					background-color: #fff;
					color: ${theme.color.main};
				}
			}
		}
		& > h3 + .buttonWrap {
			margin-top: 3rem;
		}
	}
`;
const SectionMoStyle = css`
	width: 100%;
	padding: ${theme.mo.padding.section} ${theme.mo.padding.width};
	background: linear-gradient(90deg, #7c94fe, ${theme.color.main});
	& > .container {
		max-width: ${theme.mo.maxwidth};
		margin: 0 auto;
		padding: ${theme.mo.padding.section} 0;
		& > h3 {
			margin: 0;
			padding: 0;
			font-size: ${theme.mo.size.h3};
			font-weight: 600;
			color: #fff;
			text-align: center;
			word-break: keep-all;
		}
		& > p {
			margin: 0;
			padding: 0;
			font-size: ${theme.mo.size.base};
			font-weight: 200;
			line-height: 1.8;
			color: #fff;
			text-align: center;
			opacity: 0.8;
			word-break: keep-all;
		}
		& > h3 + p {
			margin-top: ${theme.mo.padding.h3p};
		}
		& > .buttonWrap {
			text-align: center;
			& > button {
				margin: 0 0.5rem;
				padding: 1rem 2rem;
				font-size: ${theme.mo.size.base};
				font-weight: 600;
				background-color: #97a8ff;
				border-radius: 0.8rem;
				border: none;
				color: #fff;
				&.primary {
					background-color: #fff;
					color: ${theme.color.main};
				}
			}
		}
		& > h3 + .buttonWrap {
			margin-top: 3rem;
		}
	}
`;

export default Section5;
