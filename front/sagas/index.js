import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import postSaga from './post';

export const baseURL = 'http://localhost:3065';
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
