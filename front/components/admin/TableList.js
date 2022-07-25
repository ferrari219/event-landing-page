import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POSTS } from 'actions/post';
import wrapper from 'store/configureStore';

const TableList = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector((state) => state.post);
  // useEffect(() => {
  //   if (mainPosts) {
  //     dispatch(LOAD_POSTS());
  //   }
  // }, []);

  const dataSource = mainPosts;

  const columns = [
    {
      title: '이름',
      dataIndex: 'applyName',
      key: 'applyName',
    },
    {
      title: '내용',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '생년월일',
      dataIndex: 'birth',
      key: 'birth',
    },
    {
      title: '주소',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await context.store.dispatch(LOAD_POSTS());
  }
);

export default TableList;
