import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';

const TableList = ({ mainPosts }) => {
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
      <Table dataSource={mainPosts} columns={columns} />
    </>
  );
};

export default TableList;
