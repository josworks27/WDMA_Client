// user.saga은 비동기처리를 위해 store의 미들웨어로써 요청이 처리될 수 있게 하기 위함
// modules/user.js에서 액션함수를 만들지 않는 이유는 여기서 액션함수의 역할을 비동기로 처리하기 때문
import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../utl/axiosHelper';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  MAIL_AUTH_REQUEST,
  MAIL_AUTH_SUCCESS,
  MAIL_AUTH_FAILURE,
  MAIL_CHECK_REQUEST,
  MAIL_CHECK_SUCCESS,
  MAIL_CHECK_FAILURE,
} from './user';

// user saga 세팅
// * Sign In
function signinAPI(data) {
  return axios.post('/signin', data);
}

function* signinAsync(action) {
  try {
    const result = yield call(signinAPI, action.data);

    yield put({ type: SIGN_IN_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: SIGN_IN_FAILURE, error: err });
  }
}

function* watchSigninAsync() {
  yield takeLatest(SIGN_IN_REQUEST, signinAsync);
}

// * Sign Out
function signoutAPI() {
  return axios.get('/signout');
}

function* signoutAsync() {
  try {
    const result = yield call(signoutAPI);
    yield put({ type: SIGN_OUT_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: SIGN_OUT_FAILURE, error: err });
  }
}

function* watchSignoutAsync() {
  yield takeLatest(SIGN_OUT_REQUEST, signoutAsync);
}

// * Load User
function loadUserAPI(data) {
  return axios.get(`/users/${data.id}`);
}

function* loadUserAsync(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({ type: LOAD_USER_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: LOAD_USER_FAILURE, error: err });
  }
}

function* watchLoadUserAsync() {
  yield takeLatest(LOAD_USER_REQUEST, loadUserAsync);
}

// * Sign Up
function signupAPI(data) {
  return axios.post('/signup', data);
}

function* signupAsync(action) {
  try {
    const result = yield call(signupAPI, action.data);

    yield put({ type: SIGN_UP_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: SIGN_UP_FAILURE, error: err });
  }
}

function* watchSignupAsync() {
  yield takeLatest(SIGN_UP_REQUEST, signupAsync);
}

// * Mail Auth
function mailAuthAPI(data) {
  return axios.post('/auth', data);
}

function* mailAuthAsync(action) {
  try {
    yield call(mailAuthAPI, action.data);

    yield put({ type: MAIL_AUTH_SUCCESS });
  } catch (err) {
    yield put({ type: MAIL_AUTH_FAILURE, error: err });
  }
}

function* watchMailAuthAsync() {
  yield takeLatest(MAIL_AUTH_REQUEST, mailAuthAsync);
}

// * Mail Check
function mailCheckAPI(data) {
  return axios.post('/auth/check', data);
}

function* mailCheckAsync(action) {
  try {
    yield call(mailCheckAPI, action.data);

    yield put({ type: MAIL_CHECK_SUCCESS });
  } catch (err) {
    yield put({ type: MAIL_CHECK_FAILURE, error: err });
  }
}

function* watchMailCheckAsync() {
  yield takeLatest(MAIL_CHECK_REQUEST, mailCheckAsync);
}

// ! fork
function* userSaga() {
  yield all([
    fork(watchSigninAsync),
    fork(watchSignoutAsync),
    fork(watchLoadUserAsync),
    fork(watchSignupAsync),
    fork(watchMailAuthAsync),
    fork(watchMailCheckAsync),
  ]);
}

export default userSaga;
