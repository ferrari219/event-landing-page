import React from 'react';
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const AdminLayout = ({ children, loginVisible = false }) => {
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const menuItems = [
    {
      label: (
        <Link href={'/'}>
          <a>행사페이지</a>
        </Link>
      ),
      key: '/',
    },
    {
      label: (
        <Link href="/admin">
          <a>관리자페이지</a>
        </Link>
      ),
      key: '/admin',
    },
    {
      label: (
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      ),
      key: '/signup',
    },
    {
      label: (
        <Link href="/reset">
          <a>비밀번호 분실</a>
        </Link>
      ),
      key: '/reset',
    },
  ];
  return (
    <>
      <Menu
        mode="horizontal"
        selectedKeys={router.pathname}
        items={menuItems}
      />
      <Row gutter={16}>
        {loginVisible && (
          <Col xs={24} md={6}>
            {me ? <UserProfile /> : <LoginForm />}
          </Col>
        )}
        <Col xs={24} md={18}>
          {children}
        </Col>
      </Row>
    </>
  );
};
AdminLayout.proptypes = {
  children: PropTypes.elementType.isRequired,
  loginVisible: PropTypes.bool,
};

export default AdminLayout;
