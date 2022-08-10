import React from 'react';
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { css } from '@emotion/react';

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
          <a>비밀번호 초기화</a>
        </Link>
      ),
      key: '/reset',
    },
  ];
  return (
    <div css={layoutStyle}>
      <Menu
        mode="horizontal"
        selectedKeys={router.pathname}
        items={menuItems}
        className="menu"
      />
      <Row gutter={16} className="layoutBody">
        {loginVisible ? (
          <>
            <Col xs={24} md={6}>
              {me ? <UserProfile /> : <LoginForm />}
            </Col>
            <Col xs={24} md={18} className="rContent">
              {children}
            </Col>
          </>
        ) : (
          <div className="content">{children}</div>
        )}
      </Row>
    </div>
  );
};
AdminLayout.proptypes = {
  children: PropTypes.elementType.isRequired,
  loginVisible: PropTypes.bool,
};

const layoutStyle = css`
  & > .menu {
    margin: 0 0 2rem 0;
    display: flex;
    flex-flow: row wrap;
    & > li {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
  & > .layoutBody {
    padding: 0 2rem;
    & > .rContent {
      // display: flex;
      // justify-content: center;
      min-height: calc(100vh - 4.6rem);
      // background-color: #f0f3f8;
    }
    & > .content {
      width: 100%;
      max-width: 60rem;
      margin: 5rem auto 0 auto;
    }
  }
`;

export default AdminLayout;
