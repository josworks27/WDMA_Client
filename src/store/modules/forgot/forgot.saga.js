import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../../util/axiosHelper';

import {
  FORGOT_STORE_REQUEST,
  FORGOT_STORE_SUCCESS,
  FORGOT_STORE_FAILURE,
  FORGOT_MAIL_REQUEST,
  FORGOT_MAIL_SUCCESS,
  FORGOT_MAIL_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './forgot';

// forgot saga 세팅
// * Forgot Store
function forgotStoreAPI() {
  return axios.get('/forgot');
}

function* forgotStoreAsync() {
  try {
    const result = yield call(forgotStoreAPI);

    yield put({ type: FORGOT_STORE_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: FORGOT_STORE_FAILURE, error: err });
  }
}

function* watchForgotStoreAsync() {
  yield takeLatest(FORGOT_STORE_REQUEST, forgotStoreAsync);
}

// * Forgot Mail
function forgotMailAPI(data) {
  return axios.post('/forgot', data);
}

function* forgotMailAsync(action) {
  try {
    const result = yield call(forgotMailAPI, action.data);
    yield put({ type: FORGOT_MAIL_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: FORGOT_MAIL_FAILURE, error: err });
  }
}

function* watchForgotMailAsync() {
  yield takeLatest(FORGOT_MAIL_REQUEST, forgotMailAsync);
}

// * Forgot Password
function forgotPasswordAPI(data) {
  return axios.put('/forgot', data);
}

function* forgotPasswordAsync(action) {
  try {
    yield call(forgotPasswordAPI, action.data);

    yield put({ type: FORGOT_PASSWORD_SUCCESS });
  } catch (err) {
    yield put({ type: FORGOT_PASSWORD_FAILURE, error: err });
  }
}

function* watchForgotPasswordAsync() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordAsync);
}

// ! fork
function* forgotSaga() {
  yield all([
    fork(watchForgotStoreAsync),
    fork(watchForgotMailAsync),
    fork(watchForgotPasswordAsync),
  ]);
}

export default forgotSaga;
