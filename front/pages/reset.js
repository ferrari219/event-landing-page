import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import UseInput from 'hook/UseInput';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_PASSWORD, SEND_MAIL } from 'actions/user';
import AdminLayout from 'components/admin/AdminLayout';
import Router from 'next/router';

const reset = () => {
  const dispatch = useDispatch();
  const { me, sendMailDone, sendMailError, resetPasswordDone } = useSelector(
    (state) => state.user
  );
  const [email, onChangeEmail, setEmail] = UseInput('ferrari219@nate.com');
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (me && me.id) {
      message
        .warn('로그인한 사용자는 비밀번호 초기화 하실 수 없습니다.')
        .then();
      Router.push('/admin').then();
    }
  }, [me && me.id]);

  useEffect(() => {
    if (sendMailDone) {
      message.warn(
        '이메일로 임시 비밀번호가 발송 되었습니다. 임시비밀번호와 원하시는 새비밀번호를 입력해주세요.'
      );
    }
  }, [sendMailDone]);

  useEffect(() => {
    if (sendMailError) {
      message.warn('가입한 이메일과 다르거나 메일발송이 불가능한 환경입니다.');
    }
  }, [sendMailError]);

  useEffect(() => {
    if (resetPasswordDone) {
      message.warn('비밀번호가 변경되었습니다.');
    }
  }, [resetPasswordDone]);

  const onTempPasswordMail = useCallback(() => {
    setEmailError(false);
    dispatch(SEND_MAIL({ email }));
  }, [email]);

  const [tempPassword, onChangeTempPassword] = UseInput('');
  const [tempPasswordError, setTempPasswordError] = useState(false);

  const [newPassword, onChangeNewPassword] = UseInput('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [newPasswordError, setNewPasswordError] = useState(false);

  const onChangeNewPasswordCheck = useCallback(
    (e) => {
      setNewPasswordCheck(e.target.value);
      setNewPasswordError(newPassword !== e.target.value);
    },
    [newPassword, newPasswordCheck]
  );

  const onNewPassword = useCallback(() => {
    dispatch(
      RESET_PASSWORD({
        email,
        tempPassword,
        newPassword,
      })
    );
  }, [email, tempPassword, newPassword]);

  return (
    <AdminLayout>
      <Form onFinish={onNewPassword}>
        <div>
          <label htmlFor="email">이메일</label>
          <br />
          <Input name="email" value={email} onChange={onChangeEmail} required />
        </div>
        {emailError && (
          // <div>회원가입 시 기입한 이메일과 일치하지 않습니다.</div>
          <div>{emailError}</div>
        )}
        <div>
          <Button type="primary" onClick={onTempPasswordMail}>
            임시비밀번호 발송
          </Button>
        </div>
        <div>
          <label htmlFor="tempPassword">임시비밀번호</label>
          <br />
          <Input
            name="tempPassword"
            value={tempPassword}
            onChange={onChangeTempPassword}
            type="password"
            required
          />
        </div>
        {tempPasswordError && <div>임시비밀번호가 다릅니다.</div>}
        <div>
          <label htmlFor="newPassword">새비밀번호</label>
          <br />
          <Input
            name="newPassword"
            value={newPassword}
            onChange={onChangeNewPassword}
            type="password"
            required
          />
        </div>
        <div>
          <label htmlFor="newPasswordCheck">새비밀번호 한번더 입력</label>
          <br />
          <Input
            name="newPasswordCheck"
            value={newPasswordCheck}
            onChange={onChangeNewPasswordCheck}
            type="password"
            required
          />
        </div>
        {newPasswordError && <div>비밀번호가 일치하지 않습니다.</div>}
        <div>
          <Button type="primary" htmlType="submit">
            비밀번호 변경
          </Button>
        </div>
      </Form>
    </AdminLayout>
  );
};

export default reset;
