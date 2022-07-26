import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = true;

//로그인 정보
export const LOAD_MY_INFO = createAsyncThunk(
  'user/loadMyInfo',
  async () => {
    const response = await axios.get('/user');
    return response.data;
  }
  // async (data, { rejectWithValue }) => {
  //   try {

  //   } catch (error) {
  //     return rejectWithValue(error.response.data);
  //   }
  // }
);

//회원가입
export const SIGN_UP = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//로그인
export const LOG_IN = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/login', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.reponse.data);
    }
  }
);

//로그아웃
export const LOG_OUT = createAsyncThunk(
  'user/logout',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/logout', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//임시비밀번호 메일발송
export const SEND_MAIL = createAsyncThunk(
  'user/mail',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/user/mail', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//비밀번호 초기화
export const RESET_PASSWORD = createAsyncThunk(
  'user/reset-password',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/user/reset-password', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
