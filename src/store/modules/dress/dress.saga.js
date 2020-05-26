import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../../util/axiosHelper';

import {
  ALL_DRESS_REQUEST,
  ALL_DRESS_SUCCESS,
  ALL_DRESS_FAILURE,
  GET_DRESS_REQUEST,
  GET_DRESS_SUCCESS,
  GET_DRESS_FAILURE,
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

// ! fork
function* dressSaga() {
  yield all([fork(watchAllDressAsync), fork(watchGetDressAsync)]);
}

export default dressSaga;
