import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../../util/axiosHelper';

import {
  ALL_DRESS_REQUEST,
  ALL_DRESS_SUCCESS,
  ALL_DRESS_FAILURE,
  GET_DRESS_REQUEST,
  GET_DRESS_SUCCESS,
  GET_DRESS_FAILURE,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAILURE,
  POST_DRESS_REQUEST,
  POST_DRESS_SUCCESS,
  POST_DRESS_FAILURE,
  PUT_DRESS_SUCCESS,
  PUT_DRESS_FAILURE,
  PUT_DRESS_REQUEST,
} from './dress';

// dress saga 세팅
// * All Dress
function allDressAPI() {
  return axios.get('/dresses');
}

function* AllDressAsync() {
  try {
    const result = yield call(allDressAPI);

    yield put({ type: ALL_DRESS_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: ALL_DRESS_FAILURE, error: err });
  }
}

function* watchAllDressAsync() {
  yield takeLatest(ALL_DRESS_REQUEST, AllDressAsync);
}

// * Get dress
function getDressAPI(data) {
  return axios.get(`/dresses/${data.dressId}`);
}

function* getDressAsync(action) {
  try {
    const result = yield call(getDressAPI, action.data);

    yield put({ type: GET_DRESS_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: GET_DRESS_FAILURE, error: err });
  }
}

function* watchGetDressAsync() {
  yield takeLatest(GET_DRESS_REQUEST, getDressAsync);
}

// * Post event
function postEventAPI(data) {
  return axios.post(`/dresses/${data.dressId}/events`, data);
}

function* postEventAsync(action) {
  try {
    const result = yield call(postEventAPI, action.data);
    yield put({ type: POST_EVENT_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: POST_EVENT_FAILURE, error: err });
  }
}

function* watchPostEventAsync() {
  yield takeLatest(POST_EVENT_REQUEST, postEventAsync);
}

// * Post Dress
function postDressAPI(data) {
  return axios({
    method: 'post',
    url: '/dresses',
    data: data.formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

function* postDressAsync(action) {
  try {
    const result = yield call(postDressAPI, action.data);

    yield put({ type: POST_DRESS_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: POST_DRESS_FAILURE, error: err });
  }
}

function* watchPostDressAsync() {
  yield takeLatest(POST_DRESS_REQUEST, postDressAsync);
}

// * Put Dress
function putDressAPI(data) {
  return axios({
    method: 'put',
    url: '/dresses',
    data: data.formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

function* putDressAsync(action) {
  try {
    const result = yield call(putDressAPI, action.data);

    yield put({ type: PUT_DRESS_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: PUT_DRESS_FAILURE, error: err });
  }
}

function* watchPutDressAsync() {
  yield takeLatest(PUT_DRESS_REQUEST, putDressAsync);
}

// ! fork
function* dressSaga() {
  yield all([
    fork(watchAllDressAsync),
    fork(watchGetDressAsync),
    fork(watchPostEventAsync),
    fork(watchPostDressAsync),
    fork(watchPutDressAsync),
  ]);
}

export default dressSaga;
