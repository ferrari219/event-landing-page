import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

function AppLayout({ children }) {
  const [searchInput, onChangeSearchInput] = useInput('');
  const router = useRouter();
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Menu
        mode="horizontal"
        selectedKeys={[router.pathname]}
        items={[
          {
            label: (
              <Link href="/">
                <a>노드버드</a>
              </Link>
            ),
            key: '/',
          },
          {
            label: (
              <Link href="/profile">
                <a>프로필</a>
              </Link>
            ),
            key: '/profile',
          },
          {
            label: (
              <SearchInput
                enterButton
                value={searchInput}
                onChange={onChangeSearchInput}
                onSearch={onSearch}
              />
            ),
            key: '/search',
          },
        ]}
      />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;