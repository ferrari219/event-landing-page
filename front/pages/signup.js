import React, { useCallback, useEffect, useState } from 'react';
import UseInput from 'hook/UseInput';
import { Form, Input, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP } from 'actions/user';
import AdminLayout from 'components/admin/AdminLayout';
import Router from 'next/router';

//Admin SignUp
const signup = () => {
  const dispatch = useDispatch();
  const { signUpDone, signUpError, me } = useSelector((state) => state.user);

  const [userid, onChangeuserid, setuserid] = UseInput('admin');
  const [password, onChangePassword, setpassword] = UseInput('1');
  const [email, onChangeEmail, setEmail] = UseInput('ferrari219@nate.com');
  const [passwordCheck, setPasswordCheck] = useState('1');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(password !== e.target.value);
    },
    [password, passwordCheck]
  );

  useEffect(() => {
    if (me && me.id) {
      message.warn('로그인한 사용자는 가입하실 수 없습니다.').then();
      Router.push('/admin').then();
    }
  }, [me && me.id]);
  useEffect(() => {
    if (signUpDone) {
      message.warn('관리자에 등록되었습니다. 메인페이지로 이동합니다.').then();
      Router.push('/admin').then();
    }
  }, [signUpDone]);

  const onSignUp = useCallback(() => {
    dispatch(
      SIGN_UP({
        userid: 'admin',
        email,
        password,
      })
    );
  }, [userid, password, email]);

  return (
    <AdminLayout>
      <Form onFinish={onSignUp}>
        <div>
          <label htmlFor="user-id">관리자아이디</label>
          <br />
          <Input
            name="user-id"
            value={userid}
            onChange={onChangeuserid}
            required
            readOnly
          />
        </div>
        <div>관리자 아이디는 admin만 사용 가능합니다.</div>
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
          <label htmlFor="passwordCheck">비밀번호 한번더 입력</label>
          <br />
          <Input
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            type="password"
            required
          />
        </div>
        {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
        <div>
          <label htmlFor="email">이메일</label>
          <br />
          <Input name="email" value={email} onChange={onChangeEmail} required />
        </div>
        {/* <div>비밀번호 분실시 이메일로 초기화 할 수 있으니 이메일을 잘 기억해두세요.</div> */}
        <div>{signUpError && signUpError}</div>
        <div>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AdminLayout>
  );
};

export default signup;
