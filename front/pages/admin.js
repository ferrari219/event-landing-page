import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { LOAD_MY_INFO } from 'actions/user';

import AdminLayout from 'components/admin/AdminLayout';
import TableList from 'components/admin/TableList';
import wrapper from 'store/configureStore';

const admin = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  // useEffect(() => {
  //   dispatch(LOAD_MY_INFO());
  // }, []);

  return (
    <AdminLayout loginVisible={true}>
      {me ? (
        <TableList mainPosts={mainPosts} />
      ) : (
        <div>로그인 후 이용해주세요</div>
      )}
    </AdminLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req && req.headers.cookie;
      axios.defaults.headers.Cookie = '';
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
        await store.dispatch(LOAD_MY_INFO());
      }
      return {
        props: {},
      };
    }
);

export default admin;
