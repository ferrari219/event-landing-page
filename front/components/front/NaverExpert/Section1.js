import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

import { useMobile } from 'hook/useIsMobile';
import H4TxtModule from 'components/front/NaverExpert/common/H4TxtModule';

//지식iN 엑스퍼트 소개
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
}) => {
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
      <div className="column">
        {column &&
          column.map((item) => <H4TxtModule key={item.id} {...item} />)}
      </div>
    </div>
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
  column: PropTypes.arrayOf(PropTypes.object),
};

const SectionStyle = css`
  & > .container {
    max-width: ${theme.pc.maxwidth};
    margin: 0 auto;
    padding: ${theme.pc.padding.section} 0;
    & > h3 {
      display: flex;
      justify-content: center;
      font-size: ${theme.pc.size.h3};
      font-weight: 600;
      color: ${theme.color.def};
    }
    & > .column {
      display: flex;
      flex-direction: row;
      & > div {
        flex: 1;
        margin: 0 4rem;
        &: nth-of-type(2n+1) {
          margin-left: 0;
        }
        &: nth-of-type(2n) {
          margin-right: 0;
        }
      }
    }
    & > h3 + .column {
      padding: ${theme.pc.padding.h3h4} 0;
    }
  }
`;
const SectionMoStyle = css`
  & > .container {
    width: 100%;
    padding: ${theme.mo.padding.section} ${theme.mo.padding.width};
    & > h3 {
      margin: 0;
      padding: 0;
      font-size: ${theme.mo.size.h3};
      font-weight: 600;
      color: ${theme.color.def};
      line-height: 1.1;
      word-break: keep-all;
    }
    & > .column {
      & > div + div {
        margin: 4vw 0 0 0;
        padding: 0;
      }
    }
    & > h3 + .column {
      padding: ${theme.mo.padding.h3h4} 0;
    }
  }
`;
export default Section1;
