import React from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';
import { useMobile } from 'hook/useIsMobile';

const Review = ({ name, cate, pic, score, content }) => {
	const isMobile = useMobile(false);
	const markUp = (
		<>
			<div className="person">
				{pic && (
					<div className="imgWrap">
						<img src={pic} alt="" />
					</div>
				)}
				<div className="txtWrap">
					{name && <h5>{name}</h5>}
					{cate && <p className="cate">{cate}</p>}
				</div>
			</div>
			{score && <p className="score">★{score}</p>}
			{content && <div className="content">{content}</div>}
		</>
	);
	return <>{isMobile ? <div css={reviewMoStyle}>{markUp}</div> : <div css={reviewStyle}>{markUp}</div>}</>;
};
Review.proptypes = {
	name: PropTypes.string,
	cate: PropTypes.string,
	score: PropTypes.string,
	content: PropTypes.string,
};

const reviewStyle = css`
	height: 24rem;
	margin: 1rem;
	padding: 2rem;
	background: #fff;
	border-radius: 2rem;
	& > .person {
		display: flex;
		flex-direction: row;
		padding: 0 0 1rem 0;
		& > .txtWrap {
			flex: 1;
			& > h5 {
				font-size: ${theme.pc.size.lg};
				font-weight: 600;
				color: ${theme.color.def};
			}
			& > .cate {
				font-size: ${theme.pc.size.md};
				font-weight: 600;
				color: ${theme.color.main};
			}
		}
		& > .imgWrap {
			overflow: hidden;
			flex-basis: 6rem;
			height: 6rem;
			border-radius: 50%;
			img {
				width: 100%;
				height: auto;
			}
		}
		& > .imgWrap + .txtWrap {
			padding: 0 0 0 2rem;
		}
	}
	& > .score {
		padding: 0.5rem 0;
		font-size: ${theme.pc.size.lg};
		font-weight: 600;
		color: ${theme.color.main};
	}
	& > .content {
		max-width: 100%;
		word-break: break-all;
		// white-space: pre-line;
		font-size: ${theme.pc.size.base};
		font-weight: 200;
		color: ${theme.color.def};
	}
`;
const reviewMoStyle = css`
	height: 52vw;
	margin: 0 2vw;
	padding: 5vw;
	background: #fff;
	border-radius: 2rem;
	& > .person {
		display: flex;
		flex-direction: row;
		padding: 0 0 1rem 0;
		& > .txtWrap {
			flex: 1;
			& > h5 {
				font-size: ${theme.mo.size.lg};
				font-weight: 600;
				color: ${theme.color.def};
			}
			& > .cate {
				font-size: ${theme.mo.size.md};
				font-weight: 600;
				color: ${theme.color.main};
			}
		}
		& > .imgWrap {
			overflow: hidden;
			flex-basis: 6rem;
			height: 6rem;
			border-radius: 50%;
			img {
				width: 100%;
				height: auto;
			}
		}
		& > .imgWrap + .txtWrap {
			padding: 0 0 0 2rem;
		}
	}
	& > .score {
		padding: 1vw 0;
		font-size: ${theme.mo.size.lg};
		font-weight: 600;
		color: ${theme.color.main};
	}
	& > .content {
		max-width: 100%;
		word-break: break-all;
		// white-space: pre-line;
		font-size: ${theme.mo.size.base};
		font-weight: 200;
		color: ${theme.color.def};
	}
`;

export default Review;
