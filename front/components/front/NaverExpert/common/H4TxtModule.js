import React from 'react';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';
import { useMobile } from 'hook/useIsMobile';

const H4TxtModule = ({
  sttl1Strong,
  sttl2Strong,
  sttl1,
  sttl2,
  sdesc1,
  sdesc2,
  sbtn1,
  sbtn2,
  lnk1,
  lnk2,
}) => {
  const isMobile = useMobile(false);
  const markUp = (
    <>
      {sttl1 && (
        <h4>
          <strong>{sttl1Strong}</strong>
          {sttl1}
        </h4>
      )}
      {sttl2 && <h4>{sttl2}</h4>}
      {sdesc1 && <p>{sdesc1}</p>}
      {sdesc2 && <p>{sdesc2}</p>}
      <div className="buttonWrap">
        {lnk1 && <button type="button">{sbtn1}</button>}
        {lnk2 && <button type="button">{sbtn2}</button>}
      </div>
    </>
  );
  return (
    <>
      {isMobile ? (
        <div css={txtMoStyle}>{markUp}</div>
      ) : (
        <div css={txtStyle}>{markUp}</div>
      )}
    </>
  );
};

H4TxtModule.proptypes = {
  sttl1Strong: PropTypes.string,
  sttl2Strong: PropTypes.string,
  sttl1: PropTypes.string,
  sttl2: PropTypes.string,
  sdesc1: PropTypes.string,
  sdesc2: PropTypes.string,
  sbtn1: PropTypes.string,
  sbtn2: PropTypes.string,
};

const txtStyle = (color) => css`
  color: ${color};
  & > h4 {
    font-size: ${theme.pc.size.h4};
    font-weight: 400;
    line-height: 1.1;
    color: ${theme.color.def};
  }
  & > p {
    font-size: ${theme.pc.size.base};
    font-weight: 200;
    line-height: 1.8;
    color: ${theme.color.def};
  }
  & > div > button {
    padding: 1rem 0;
    font-size: ${theme.pc.size.base};
    font-weight: 600;
    background: transparent;
    border: none;
    color: #5b5e95;
  }
  & > h4 + p {
    padding-top: ${theme.pc.padding.h4p};
  }
`;
const txtMoStyle = (color) => css`
  color: ${color};
  & > h4 {
    margin: 0;
    padding: ${theme.mo.padding.h3p} 0;
    font-size: ${theme.mo.size.h4};
    font-weight: 400;
    line-height: 1.1;
    color: ${theme.color.def};
    word-break: keep-all;
  }
  & > p {
    margin: 0;
    padding: 0;
    font-size: ${theme.mo.size.base};
    font-weight: 200;
    line-height: 1.8;
    color: ${theme.color.def};
    word-break: keep-all;
  }
  & > .buttonWrap > button {
    margin: 0;
    padding: 1rem 0;
    font-size: ${theme.mo.size.base};
    font-weight: 600;
    background: transparent;
    border: none;
    color: #5b5e95;
  }
  & > h4 + p {
    padding: ${theme.mo.padding.h4p} 0;
  }
`;

export default H4TxtModule;
