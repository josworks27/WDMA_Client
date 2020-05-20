// 루트 사가 정의
import { all, call } from 'redux-saga/effects';
import userSaga from './modules/user.saga';

export default function* rootSaga() {
  yield all([call(userSaga)]);
}
