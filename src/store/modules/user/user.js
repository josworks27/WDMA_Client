// 액션 타입 정의
export const USER_RESET = 'USER_RESET';

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

export const MAIL_AUTH_REQUEST = 'MAIL_AUTH_REQUEST';
export const MAIL_AUTH_SUCCESS = 'MAIL_AUTH_SUCCESS';
export const MAIL_AUTH_FAILURE = 'MAIL_AUTH_FAILURE';

export const MAIL_CHECK_REQUEST = 'MAIL_CHECK_REQUEST';
export const MAIL_CHECK_SUCCESS = 'MAIL_CHECK_SUCCESS';
export const MAIL_CHECK_FAILURE = 'MAIL_CHECK_FAILURE';

// 리듀서 초기값 정의
const initialState = {
  isSignin: false,
  signinError: '',
  isSignup: false,
  signupError: '',
  isMailAuth: false,
  mailAuthError: '',
  isMailCheck: false,
  mailCheckError: '',
  me: null,
  load: [],
  email: '',
  checked: false,
  store: [],
};

// 리듀서 정의
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_RESET:
      return {
        isSignin: false,
        signinError: '',
        isSignup: false,
        signupError: '',
        isMailAuth: false,
        mailAuthError: '',
        isMailCheck: false,
        mailCheckError: '',
        me: null,
        load: [],
        email: '',
        checked: false,
        store: [],
      };
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
    case MAIL_AUTH_REQUEST:
      return {
        ...state,
        isMailAuth: true,
        mailAuthError: '',
        email: '',
      };
    case MAIL_AUTH_SUCCESS:
      return {
        ...state,
        isMailAuth: false,
        mailAuthError: '',
        email: action.payload.data,
      };
    case MAIL_AUTH_FAILURE:
      return {
        ...state,
        isMailAuth: false,
        mailAuthError: action.error,
        email: '',
      };
    case MAIL_CHECK_REQUEST:
      return {
        ...state,
        isMailCheck: true,
        mailCheckError: '',
        checked: false,
        store: [],
      };
    case MAIL_CHECK_SUCCESS:
      return {
        ...state,
        isMailCheck: false,
        mailCheckError: '',
        checked: true,
        store: action.payload.data,
      };
    case MAIL_CHECK_FAILURE:
      return {
        ...state,
        isMailCheck: false,
        mailCheckError: action.error,
        checked: false,
        store: [],
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
