import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import UseInput from 'hook/UseInput';
import { LOG_IN } from 'actions/user';

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
      console.log(logInError);
      // message.warn('가입되지 않았거나 비밀번호가 틀렸습니다. 다시 시도해주세요');
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
    >
      <div>
        <label htmlFor="userid">관리자아이디</label>
        <br />
        <Controller
          name="userid"
          control={control}
          render={({ field }) => (
            <Input {...register('userid')} readOnly {...field} />
          )}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <br />
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
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
