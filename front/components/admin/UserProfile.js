import React, { useCallback, useEffect } from 'react';
import { Avatar, Button, Card, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from 'actions/user';
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';
import { LogoutOutlined } from '@ant-design/icons';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading, logInDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (logInDone) {
      message.warn('로그인이 완료 되었습니다.');
    }
  }, [logInDone]);

  const onLogOut = useCallback(() => {
    dispatch(LOG_OUT());
  }, []);
  return (
    <Card css={profileStyle}>
      <Card.Meta
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random">
            {me.email[0]}
          </Avatar>
        }
        title="관리자님"
        description={me.email}
      />
      <div className="buttonWrap">
        <Button
          onClick={onLogOut}
          loading={logOutLoading}
          icon={<LogoutOutlined />}
        >
          로그아웃
        </Button>
      </div>
    </Card>
  );
};

const profileStyle = css`
  &.ant-card {
    margin-bottom: 1rem;
    // border-radius: 1rem;
  }
  .ant-card-meta {
    display: flex;
    justify-content: center;
    &-title {
      margin-bottom: 0rem !important;
      font-size: ${theme.pc.size.md};
    }
    &-description {
      font-size: ${theme.pc.size.sm};
    }
  }
  div + .buttonWrap {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 0 0;
  }
`;

export default UserProfile;
