import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POSTS } from 'actions/post';

const TableList = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector((state) => state.post);
  useEffect(() => {
    if (mainPosts) {
      dispatch(LOAD_POSTS());
    }
  }, []);

  const dataSource = mainPosts;
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];

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

export default TableList;
