import React, { useCallback, useEffect } from 'react';
import { Avatar, Button, Card, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from 'actions/user';

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
    <Card>
      <Card.Meta
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random">
            {me.email[0]}
          </Avatar>
        }
        title="관리자님"
        description={me.email}
      />
      <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
