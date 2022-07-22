import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import Globals from 'assets/styles/Global';
import wrapper from 'store/configureStore';

const Common = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Landing</title>
      </Head>
      <Globals />
      <Component />
    </>
  );
};
Common.proptypes = {
  Component: PropTypes.elementType.isRequirUed,
};

export default wrapper.withRedux(Common);
