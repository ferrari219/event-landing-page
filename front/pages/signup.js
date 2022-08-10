import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import { Input, Button, Form, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { SIGN_UP } from 'actions/user';
import AdminLayout from 'components/admin/AdminLayout';
import { css } from '@emotion/react';
import { UserAddOutlined } from '@ant-design/icons';

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
  useEffect(() => {
    if (signUpError) message.warn(signUpError);
  }, [signUpError]);

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
        css={signUpStyle}
        className="adminForm"
      >
        <dl>
          <dt>
            <label htmlFor="userid">관리자아이디</label>
          </dt>
          <dd>
            <Controller
              name="userid"
              control={control}
              render={({ field }) => (
                <Input {...register('userid')} {...field} readOnly />
              )}
            />
            <span className="msg">
              관리자 아이디는 admin만 사용 가능합니다.
            </span>
          </dd>
          <dt>
            <label htmlFor="password">비밀번호</label>
          </dt>
          <dd>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  {...register('password', {
                    required: '비밀번호를 입력하세요',
                    pattern: {
                      value: 1,
                      message: '1글자 이상 비밀번호를 입력하세요',
                    },
                  })}
                  {...field}
                />
              )}
            />
            {errors.password && (
              <span className="msg">{errors.password?.message}</span>
            )}
          </dd>
          <dt>
            <label htmlFor="passwordCheck">비밀번호 한번더 입력</label>
          </dt>
          <dd>
            <Controller
              name="passwordCheck"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  {...register('passwordCheck', {
                    required: '비밀번호를 한번 더 입력하세요',
                    validate: {
                      matchPreviousPassword: (value) => {
                        const { password } = getValues();
                        return (
                          password === value || '비밀번호가 일치하지 않습니다.'
                        );
                      },
                    },
                  })}
                  {...field}
                />
              )}
            />
            {errors.passwordCheck && (
              <span className="msg">{errors.passwordCheck?.message}</span>
            )}
          </dd>
          <dt>
            <label htmlFor="email">이메일</label>
          </dt>
          <dd>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...register('email', {
                    required:
                      '비밀번호 분실 시 이메일로 비밀번호를 초기화할 수 있습니다.',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: '이메일 형식에 맞지 않습니다.',
                    },
                  })}
                  {...field}
                />
              )}
            />
            {errors.email && (
              <span className="msg">{errors.email?.message}</span>
            )}
          </dd>
        </dl>
        {/* <div>비밀번호 분실시 이메일로 초기화 할 수 있으니 이메일을 잘 기억해두세요.</div> */}
        {/* <div>{signUpError && signUpError}</div> */}
        <div className="buttonWrap">
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            shape="round"
            size="large"
            htmlType="submit"
          >
            가입하기
          </Button>
        </div>
      </Form>
    </AdminLayout>
  );
};

const signUpStyle = css`
  & > .buttonWrap {
    & > button {
      padding: 0 5rem;
    }
  }
`;

export default signup;
