import { createSlice } from '@reduxjs/toolkit';
import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  SEND_MAIL,
  RESET_PASSWORD,
} from 'actions/user';

export const initialState = {
  signUpLoading: false, // 회원가입
  signUpDone: false,
  signUpError: null,
  logInLoading: false, // 로그인
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃
  logOutDone: false,
  logOutError: null,
  sendMailLoading: false, //비밀번호 초기화 메일발송
  sendMailDone: false,
  sendMailError: null,
  resetPasswordLoading: false, // 패스워드 초기화
  resetPasswordDone: false,
  resetPasswordError: null,

  me: null,
  signUpMessage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SIGN_UP.pending, (state) => {
        state.signUpLoading = true;
        state.signUpDone = false;
        state.signUpError = null;
      })
      .addCase(SIGN_UP.fulfilled, (state) => {
        state.signUpLoading = false;
        state.signUpDone = true;
      })
      .addCase(SIGN_UP.rejected, (state) => {
        state.signUpLoading = false;
        state.signUpError = action.payload;
      })
      .addCase(LOG_IN.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(LOG_IN.fulfilled, (state) => {
        state.logInLoading = false;
        state.logInDone = true;
      })
      .addCase(LOG_IN.rejected, (state) => {
        state.logInLoading = false;
        state.logInError = action.payload;
      })
      .addCase(LOG_OUT.pending, (state) => {
        state.logOutLoading = true;
        state.logOutDone = false;
        state.logOutError = null;
      })
      .addCase(LOG_OUT.fulfilled, (state) => {
        state.logOutLoading = false;
        state.logOutDone = true;
      })
      .addCase(LOG_OUT.rejected, (state) => {
        state.logOutLoading = false;
        state.logOutError = action.payload;
      })
      .addCase(SEND_MAIL.pending, (state) => {
        state.sendMailLoading = true;
        state.sendMailDone = false;
        state.sendMailError = null;
      })
      .addCase(SEND_MAIL.fulfilled, (state) => {
        state.sendMailLoading = false;
        state.sendMailDone = true;
      })
      .addCase(SEND_MAIL.rejected, (state) => {
        state.sendMailLoading = false;
        state.sendMailError = action.payload;
      })
      .addCase(RESET_PASSWORD.pending, (state) => {
        state.resetPasswordLoading = true;
        state.resetPasswordDone = false;
        state.resetPasswordError = null;
      })
      .addCase(RESET_PASSWORD.fulfilled, (state) => {
        state.resetPasswordLoading = false;
        state.resetPasswordDone = true;
      })
      .addCase(RESET_PASSWORD.rejected, (state) => {
        state.resetPasswordLoading = false;
        state.resetPasswordError = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});

export default userSlice;
