import { createSlice } from '@reduxjs/toolkit';
import { ADD_POST, LOAD_POSTS, UPLOAD_IMAGES } from 'actions/post';

export const initialState = {
  loadPostsLoading: false, //로드
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false, //이벤트 응모하기
  addPostDone: false,
  addPostError: null,
  uploadImagesLoading: false, //이미지업로드
  uploadImagesDone: false,
  uploadImagesError: null,

  applyData: null,
  mainPosts: [],
  imagePaths: [],

  company: 'OO', //회사명
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    REMOVE_IMAGE(state, action) {
      state.imagePaths = state.imagePaths.filter(
        (v, i) => i !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(LOAD_POSTS.pending, (state) => {
        state.loadPostsLoading = true;
        state.loadPostsDone = false;
        state.loadPostsError = null;
      })
      .addCase(LOAD_POSTS.fulfilled, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsDone = true;
        state.mainPosts.concat(action.payload);
      })
      .addCase(LOAD_POSTS.rejected, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsError = action.payload;
      })
      .addCase(ADD_POST.pending, (state) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = null;
      })
      .addCase(ADD_POST.fulfilled, (state, action) => {
        state.addPostLoading = false;
        state.addPostDone = true;
        state.mainPosts.unshift(action.payload);
        state.imagePaths = [];
      })
      .addCase(ADD_POST.rejected, (state, action) => {
        state.addPostLoading = false;
        state.addPostError = action.payload;
      })
      .addCase(UPLOAD_IMAGES.pending, (state) => {
        state.uploadImagesLoading = true;
        state.uploadImagesDone = false;
        state.uploadImagesError = null;
      })
      .addCase(UPLOAD_IMAGES.fulfilled, (state) => {
        state.uploadImagesLoading = false;
        state.uploadImagesDone = true;
        state.imagePaths = action.payload;
      })
      .addCase(UPLOAD_IMAGES.rejected, (state, action) => {
        state.uploadImagesLoading = false;
        state.uploadImagesError = action.payload;
      })
      .addDefaultCase((state) => state),
});

export default postSlice;
