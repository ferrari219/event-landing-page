import React, { useCallback, useState } from 'react';
import UseInput from 'hook/UseInput';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP } from 'actions/user';
import AdminLayout from 'components/admin/AdminLayout';

//Admin SignUp
const signup = () => {
  const dispatch = useDispatch();
  const { signUpError } = useSelector((state) => state.user);

  const [userid, onChangeuserid, setuserid] = UseInput('admin');
  const [password, onChangePassword, setpassword] = UseInput('');
  const [email, onChangeEmail, setEmail] = UseInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(password !== e.target.value);
    },
    [password, passwordCheck]
  );

  const onSignUp = useCallback(() => {
    dispatch({
      type: SIGN_UP,
      data: {
        userid: 'admin',
        email,
        password,
      },
    });
  }, [userid, password, email]);

  return (
    <AdminLayout>
      <Form onFinish={onSignUp}>
        <div>
          <label htmlFor="user-id">관리자아이디</label>
          <br />
          <Input name="user-id" value={userid} required readOnly />
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
