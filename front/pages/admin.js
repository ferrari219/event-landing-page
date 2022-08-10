import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { LOAD_MY_INFO } from 'actions/user';

import AdminLayout from 'components/admin/AdminLayout';
import TableList from 'components/admin/TableList';
import wrapper from 'store/configureStore';
import { LOAD_POSTS } from 'actions/post';
import CardList from 'components/admin/CardList';
import { css } from '@emotion/react';

const admin = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  // useEffect(() => {
  //   dispatch(LOAD_POSTS());
  // }, []);
  // console.log(mainPosts);
  return (
    <AdminLayout loginVisible={true}>
      {me ? (
        <>
          <TableList mainPosts={mainPosts} />
          <CardList mainPosts={mainPosts} />
        </>
      ) : (
        <div css={notLoginStyle}>로그인 후 이용해주세요</div>
      )}
    </AdminLayout>
  );
};

const notLoginStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
`;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req && req.headers.cookie;
      axios.defaults.headers.Cookie = '';
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
        await store.dispatch(LOAD_MY_INFO());
      }
      await store.dispatch(LOAD_POSTS());
      return {
        props: {},
      };
    }
);

export default admin;
