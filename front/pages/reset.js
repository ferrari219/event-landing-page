import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import { Button, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_PASSWORD, SEND_MAIL } from 'actions/user';
import { Controller, useForm } from 'react-hook-form';

import UseInput from 'hook/UseInput';
import AdminLayout from 'components/admin/AdminLayout';
import { css } from '@emotion/react';
import { MailOutlined, UnlockOutlined } from '@ant-design/icons';

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
        css={resetStyle}
        className="adminForm"
      >
        <dl>
          <dt>
            <label htmlFor="email">이메일</label>
          </dt>
          <dd>
            <span className="iptFlex">
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
              <Button
                htmlType="button"
                icon={<MailOutlined />}
                onClick={() => {
                  const { email } = getValues();
                  dispatch(SEND_MAIL({ email }));
                }}
              >
                임시비밀번호 발송
              </Button>
            </span>
            {errors.email && (
              <span className="msg">{errors.email?.message}</span>
            )}
          </dd>
          <dt>
            <label htmlFor="tempPassword">임시비밀번호</label>
          </dt>
          <dd>
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
            {errors.tempPassword && (
              <span className="msg">{errors.tempPassword?.message}</span>
            )}
          </dd>
          <dt>
            <label htmlFor="newPassword">새비밀번호</label>
          </dt>
          <dd>
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
          </dd>
          <dt>
            <label htmlFor="newPasswordCheck">새비밀번호 한번더 입력</label>
          </dt>
          <dd>
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
            {errors.newPasswordCheck && (
              <span className="msg">{errors.newPasswordCheck?.message}</span>
            )}
          </dd>
        </dl>
        <div className="buttonWrap">
          <Button
            type="primary"
            icon={<UnlockOutlined />}
            shape="round"
            size="large"
            htmlType="submit"
          >
            비밀번호 변경
          </Button>
        </div>
      </Form>
    </AdminLayout>
  );
};
const resetStyle = css`
  & > .buttonWrap {
    & > button {
      padding: 0 5rem;
    }
  }
`;

export default reset;
