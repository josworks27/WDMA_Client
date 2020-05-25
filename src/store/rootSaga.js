// 루트 사가 정의
import { all, call } from 'redux-saga/effects';
import userSaga from './modules/user/user.saga';
import forgotSaga from './modules/forgot/forgot.saga';
import dressSaga from './modules/dress/dress.saga';

export default function* rootSaga() {
  yield all([call(userSaga), call(forgotSaga), call(dressSaga)]);
}
