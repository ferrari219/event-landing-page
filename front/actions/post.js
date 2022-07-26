import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = true;

//게시글 로딩
export const LOAD_POSTS = createAsyncThunk(
  'posts',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('/posts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//게시물 작성
export const ADD_POST = createAsyncThunk(
  'post',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/post', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//업로드 이미지
export const UPLOAD_IMAGES = createAsyncThunk(
  'post/images',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/post/images', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
