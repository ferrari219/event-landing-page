import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import UseInput from 'hook/UseInput';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN } from 'actions/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInError } = useSelector((state) => state.user);
  const { loginLoading } = useSelector((state) => state.user);
  const [userid, onChangeuserid, setuserid] = UseInput('admin');
  const [password, onChangePassword, setpassword] = UseInput('');

  const onLogin = useCallback(() => {
    dispatch(
      LOG_IN({
        userid,
        password,
      })
    );
  }, [userid, password]);
  return (
    <Form onFinish={onLogin}>
      <div>
        <label htmlFor="user-id">관리자아이디</label>
        <br />
        <Input
          name="user-id"
          value={userid}
          onChange={onChangeuserid}
          required
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <br />
        <Input
          name="password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={loginLoading}>
          로그인
        </Button>
      </div>
      {logInError && <div>비밀번호가 틀렸습니다.</div>}
    </Form>
  );
};

export default LoginForm;
