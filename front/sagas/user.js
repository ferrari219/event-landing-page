import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from 'reducers/user';

function signUpAPI(data) {
  return axios.post('/user', data);
}
function* signUp(action) {
  try {
    console.log('saga signUp');
    const result = yield call(signUpAPI, action.data);

    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}
function* logIn(action) {
  try {
    console.log('saga logIn');
    const result = yield call(logInAPI, action.data);

    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}
function* logOut() {
  try {
    console.log('saga logOut');
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function sendMailAPI(data) {
  return axios.patch('/user/mail', data);
}
function* sendMail(action) {
  try {
    console.log('saga sendMail');
    const result = yield call(sendMailAPI, action.data);

    yield put({
      type: SEND_MAIL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: SEND_MAIL_FAILURE,
      error: err.response.data,
    });
  }
}

function resetPasswordAPI(data) {
  return axios.patch('/user/reset-password', data);
}
function* resetPassword(action) {
  try {
    console.log('saga resetPassword');
    const result = yield call(resetPasswordAPI, action.data);

    yield put({
      type: RESET_PASSWORD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: RESET_PASSWORD_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSendMail() {
  yield takeLatest(SEND_MAIL_REQUEST, sendMail);
}
function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSendMail),
    fork(watchResetPassword),
  ]);
}
