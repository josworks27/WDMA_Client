// 루트 리듀서 정의
import { combineReducers } from 'redux';
import userReducer from './modules/user';

export default combineReducers({
  userReducer,
});
