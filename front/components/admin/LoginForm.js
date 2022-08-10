import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { css } from '@emotion/react';

import UseInput from 'hook/UseInput';
import { LOG_IN } from 'actions/user';
import { LoginOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const dispatch = useDispatch();
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
    },
  });

  const { logOutDone, logInError, logInLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (logOutDone) {
      message.warn('로그아웃이 완료 되었습니다.');
    }
  }, [logOutDone]);

  useEffect(() => {
    if (logInError) {
      // console.log(logInError);
      message.warn(logInError);
    }
  }, [logInError]);
  return (
    <Form
      onFinish={handleSubmit(({ userid, password }) => {
        dispatch(
          LOG_IN({
            userid,
            password,
          })
        );
      })}
      css={loginFormStyle}
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
              <Input {...register('userid')} readOnly {...field} />
            )}
          />
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
                  required: '비밀번호를 입력해주세요',
                })}
                {...field}
              />
            )}
          />
        </dd>
      </dl>
      <div className="buttonWrap">
        <Button
          type="primary"
          htmlType="submit"
          loading={logInLoading}
          icon={<LoginOutlined />}
        >
          로그인
        </Button>
      </div>
    </Form>
  );
};

const loginFormStyle = css`
  dl {
    display: grid;
    grid-template-columns: 1fr 2fr;
    & dt,
    & dd {
      display: flex;
      align-items: center;
      padding: 0.2rem 0;
    }
  }
  .buttonWrap {
    display: flex;
    justify-content: center;
    margin: 1rem 0 0 0;
    & button {
      width: 100%;
      // padding: 0.5rem 5rem;
    }
  }
`;

export default LoginForm;
