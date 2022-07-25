import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import AdminLayout from 'components/admin/AdminLayout';
import TableList from 'components/admin/TableList';

const admin = () => {
  const { me } = useSelector((state) => state.user);
  // const { mainPosts } = useSelector((state) => state.post);

  return (
    <AdminLayout>
      {me && <TableList />}
      {/* <Table dataSource={dataSource} columns={columns} /> */}
      {/* {mainPosts && mainPosts.map((post) => <div key={post.id}>{post}</div>)}
      {me ? (
        mainPosts && mainPosts.map((post) => <div>{post}</div>)
      ) : (
        <div>로그인 후 이용해주세요</div>
      )} */}
    </AdminLayout>
  );
};

export default admin;
