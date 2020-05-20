import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// 스토어 생성
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// 사가 미들웨어 실행
sagaMiddleware.run(rootSaga);

export default store;
