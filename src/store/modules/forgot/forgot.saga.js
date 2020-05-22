import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../../utl/axiosHelper';

import {
  FORGOT_STORE_REQUEST,
  FORGOT_STORE_SUCCESS,
  FORGOT_STORE_FAILURE,
  FORGOT_MAIL_REQUEST,
  FORGOT_MAIL_SUCCESS,
  FORGOT_MAIL_FAILURE,
} from './forgot';

// forgot saga 세팅
// * Forgot Store
function forgotStoreAPI() {
  return axios.get('/find');
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
  return axios.post('/find', data);
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

// ! fork
function* forgotSaga() {
  yield all([fork(watchForgotStoreAsync), fork(watchForgotMailAsync)]);
}

export default forgotSaga;
