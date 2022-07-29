import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import { Input, Button, Form, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { SIGN_UP } from 'actions/user';
import AdminLayout from 'components/admin/AdminLayout';

//Admin SignUp
const signup = () => {
  const dispatch = useDispatch();
  const { signUpDone, signUpError, me } = useSelector((state) => state.user);
  const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userid: 'admin',
      password: '1',
      passwordCheck: '1',
      email: 'ferrari219@nate.com',
    },
  });

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

  return (
    <AdminLayout>
      <Form
        onFinish={handleSubmit(({ email, password }) => {
          dispatch(
            SIGN_UP({
              userid: 'admin',
              email,
              password,
            })
          );
        })}
      >
        <div>
          <label htmlFor="userid">관리자아이디</label>
          <Controller
            name="userid"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <input id="userid" type="text" readOnly {...register('userid')} />
        </div>
        <div>관리자 아이디는 admin만 사용 가능합니다.</div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: 1,
              },
            })}
          />
        </div>
        {errors.password && <div>{errors.password?.message}</div>}
        <div>
          <label htmlFor="passwordCheck">비밀번호 한번더 입력</label>
          <input
            id="passwordCheck"
            type="password"
            {...register('passwordCheck', {
              required: '비밀번호를 확인해주세요',
              validate: {
                matchPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다.';
                },
              },
            })}
          />
        </div>
        {errors.passwordCheck && <div>{errors.passwordCheck?.message}</div>}
        <div>
          <label htmlFor="email">이메일</label>
          <br />
          <input id="email" type="text" {...register('email')} />
        </div>
        {/* <div>비밀번호 분실시 이메일로 초기화 할 수 있으니 이메일을 잘 기억해두세요.</div> */}
        <div>{signUpError && signUpError}</div>
        <div>
          <button type="submit">가입하기</button>
        </div>
      </Form>
    </AdminLayout>
  );
};

export default signup;
