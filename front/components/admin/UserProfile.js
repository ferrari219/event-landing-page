import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from 'actions/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

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
