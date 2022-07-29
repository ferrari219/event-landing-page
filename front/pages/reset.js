import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import { Button, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_PASSWORD, SEND_MAIL } from 'actions/user';
import { Controller, useForm } from 'react-hook-form';

import UseInput from 'hook/UseInput';
import AdminLayout from 'components/admin/AdminLayout';

const reset = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: 'ferrari219@nate.com',
      tempPassword: '',
      newPassword: '1',
      newPasswordCheck: '1',
    },
  });
  const { me, sendMailDone, sendMailError, resetPasswordDone } = useSelector(
    (state) => state.user
  );

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
  return (
    <AdminLayout>
      <Form
        onFinish={handleSubmit(({ email, tempPassword, newPassword }) => {
          dispatch(
            RESET_PASSWORD({
              email,
              tempPassword,
              newPassword,
            })
          );
        })}
      >
        <div>
          <label htmlFor="email">이메일</label>
          <br />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...register('email', {
                  required: '가입 시 입력한 이메일을 입력하세요',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식에 맞지 않습니다.',
                  },
                })}
                {...field}
              />
            )}
          />
        </div>
        {errors.email && <div>{errors.email?.message}</div>}
        <div>
          <Button
            htmlType="button"
            onClick={() => {
              const { email } = getValues();
              dispatch(SEND_MAIL({ email }));
            }}
          >
            임시비밀번호 발송
          </Button>
        </div>
        <div>
          <label htmlFor="tempPassword">임시비밀번호</label>
          <br />
          <Controller
            name="tempPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                {...register('tempPassword', {
                  required: '이메일로 전송받은 임시 비밀번호를 입력해주세요',
                })}
                {...field}
              />
            )}
          />
        </div>
        {errors.tempPassword && <div>{errors.tempPassword?.message}</div>}
        <div>
          <label htmlFor="newPassword">새비밀번호</label>
          <br />
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                {...register('newPassword', {
                  required: '새비밀번호를 입력해주세요',
                  pattern: {
                    value: 1,
                    message: '1자리수 이상의 비밀번호를 입력해주세요.',
                  },
                })}
                {...field}
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="newPasswordCheck">새비밀번호 한번더 입력</label>
          <br />
          <Controller
            name="newPasswordCheck"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                {...register('newPasswordCheck', {
                  validate: {
                    matchPreviousPassword: (value) => {
                      const { newPassword } = getValues();
                      return (
                        newPassword === value || '비밀번호가 맞지 않습니다.'
                      );
                    },
                  },
                })}
                {...field}
              />
            )}
          />
        </div>
        {errors.newPasswordCheck && (
          <div>{errors.newPasswordCheck?.message}</div>
        )}
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
