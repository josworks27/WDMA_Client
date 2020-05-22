// 루트 리듀서 정의
import { combineReducers } from 'redux';
import userReducer from './modules/user/user';
import forgotReducer from './modules/forgot/forgot';

export default combineReducers({
  userReducer,
  forgotReducer,
});
