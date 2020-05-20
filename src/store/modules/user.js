// 액션 타입 정의
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN-UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN-UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN-UP_FAILURE';

// 리듀서 초기값 정의
const initialState = {
  isSignin: false,
  signinError: '',
  isSignup: false,
  signupError: '',
  me: null,
  load: [],
};

// 리듀서 정의
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isSignin: true,
        signinError: '',
        me: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignin: false,
        me: action.payload.data,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isSignin: false,
        signinError: action.error,
        me: null,
      };
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        me: null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        me: null,
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        me: null,
      };
    case LOAD_USER_REQUEST:
      return {
        ...state,
        signinError: '',
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        load: action.payload,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        signinError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSignup: true,
        signupError: '',
        me: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignup: false,
        signupError: '',
        me: action.payload.data,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSignup: false,
        signupError: action.error,
        me: null,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
