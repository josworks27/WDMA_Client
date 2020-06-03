// user.saga은 비동기처리를 위해 store의 미들웨어로써 요청이 처리될 수 있게 하기 위함
// modules/user.js에서 액션함수를 만들지 않는 이유는 여기서 액션함수의 역할을 비동기처리로 명령하기 때문
import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../../util/axiosHelper';

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
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAILURE,
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_FAILURE,
  PUT_PASSWORD_REQUEST,
  PUT_PASSWORD_SUCCESS,
  PUT_PASSWORD_FAILURE,
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
function loadUserAPI() {
  return axios.get('/users');
}

function* loadUserAsync() {
  try {
    const result = yield call(loadUserAPI);
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
    const result = yield call(mailAuthAPI, action.data);

    yield put({ type: MAIL_AUTH_SUCCESS, payload: result.data });
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
    const result = yield call(mailCheckAPI, action.data);

    yield put({ type: MAIL_CHECK_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: MAIL_CHECK_FAILURE, error: err });
  }
}

function* watchMailCheckAsync() {
  yield takeLatest(MAIL_CHECK_REQUEST, mailCheckAsync);
}

// * Store List
function storeListAPI() {
  return axios.get('/store');
}

function* storeListAsync() {
  try {
    const result = yield call(storeListAPI);

    yield put({ type: STORE_LIST_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: STORE_LIST_FAILURE, error: err });
  }
}

function* watchStoreListAsync() {
  yield takeLatest(STORE_LIST_REQUEST, storeListAsync);
}

// * Put User
function putUserAPI(data) {
  return axios.put('/users', data);
}

function* putUserAsync(action) {
  try {
    const result = yield call(putUserAPI, action.data);

    yield put({ type: PUT_USER_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: PUT_USER_FAILURE, error: err });
  }
}

function* watchPutUserAsync() {
  yield takeLatest(PUT_USER_REQUEST, putUserAsync);
}

// * Put Password
function putPasswordAPI(data) {
  return axios.put('/users/password', data);
}

function* putPasswordAsync(action) {
  try {
    const result = yield call(putPasswordAPI, action.data);

    yield put({ type: PUT_PASSWORD_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: PUT_PASSWORD_FAILURE, error: err });
  }
}

function* watchPutPasswordAsync() {
  yield takeLatest(PUT_PASSWORD_REQUEST, putPasswordAsync);
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
    fork(watchStoreListAsync),
    fork(watchPutUserAsync),
    fork(watchPutPasswordAsync),
  ]);
}

export default userSaga;
