import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

import { useMobile } from 'hook/useIsMobile';
import H4TxtModule from 'components/front/NaverExpert/common/H4TxtModule';

//숙소 예약할때 추가 할인 받으세요
const Section1 = ({ id, subtitle1, subtitle2, title1Strong, title2Strong, title1, title2, desc1, desc2, button1, button2, info }) => {
	const isMobile = useMobile(false);
	const markUp = (
		<div className="container">
			<img src={`/img/toss/sec1_img1.jpg`} alt="" />
			{subtitle1 && <h2>{subtitle1}</h2>}
			{title1 && (
				<h3>
					<strong>{title1Strong}</strong>
					{title1}
				</h3>
			)}
			{title2 && (
				<h3>
					<strong>{title2Strong}</strong>
					{title2}
				</h3>
			)}
			{desc1 && <p>{desc1}</p>}
			{desc2 && <p>{desc2}</p>}

			<img src={`/img/toss/sec1_img2.jpg`} alt="" />

			<div className="info">{info && info.map((item) => <H4TxtModule key={item.id} {...item} />)}</div>

			<div className="buttonWrap">
				{button1 && <button type="button">{button1}</button>}
				{button2 && <button type="button">{button2}</button>}
			</div>
		</div>
	);
	return <>{isMobile ? <section css={SectionMoStyle}>{markUp}</section> : <section css={SectionStyle}>{markUp}</section>}</>;
};

Section1.proptypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
	column: PropTypes.arrayOf(PropTypes.object),
};

const SectionStyle = css`
	& > .container {
		& > h3 {
		}
	}
`;
const SectionMoStyle = css`
	& > .container {
		& > h3 {
		}
	}
`;
export default Section1;
