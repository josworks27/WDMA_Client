import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../../util/axiosHelper';

import {
  DRESS_ALL_REQUEST,
  DRESS_ALL_SUCCESS,
  DRESS_ALL_FAILURE,
} from './dress';

// dress saga 세팅
// * Dress All
function dressAllAPI() {
  return axios.get('/dresses');
}

function* dressAllAsync() {
  try {
    const result = yield call(dressAllAPI);

    yield put({ type: DRESS_ALL_SUCCESS, payload: result.data });
  } catch (err) {
    yield put({ type: DRESS_ALL_FAILURE, error: err });
  }
}

function* watchDressAllAsync() {
  yield takeLatest(DRESS_ALL_REQUEST, dressAllAsync);
}

// ! fork
function* dressSaga() {
  yield all([fork(watchDressAllAsync)]);
}

export default dressSaga;
