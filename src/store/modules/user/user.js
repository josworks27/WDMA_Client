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

export const STORE_LIST_REQUEST = 'STORE_LIST_REQUEST';
export const STORE_LIST_SUCCESS = 'STORE_LIST_SUCCESS';
export const STORE_LIST_FAILURE = 'STORE_LIST_FAILURE';

export const PUT_USER_REQUEST = 'PUT_USER_REQUEST';
export const PUT_USER_SUCCESS = 'PUT_USER_SUCCESS';
export const PUT_USER_FAILURE = 'PUT_USER_FAILURE';

export const PUT_PASSWORD_REQUEST = 'PUT_PASSWORD_REQUEST';
export const PUT_PASSWORD_SUCCESS = 'PUT_PASSWORD_SUCCESS';
export const PUT_PASSWORD_FAILURE = 'PUT_PASSWORD_FAILURE';

// 리듀서 초기값 정의
const initialState = {
  isSignin: false,
  signinError: '',
  isSignup: false,
  signupError: '',
  me: null,
  isMailAuth: false,
  mailAuthError: '',
  email: '',
  isMailCheck: false,
  mailCheckError: '',
  checked: false,
  isGettingStore: false,
  getStoreError: '',
  store: [],
  isLoadingUser: false,
  loadUserError: '',
  load: [],
  isPuttingUser: false,
  putUserError: '',
  updateUser: false,
  isPuttingPassword: false,
  putPasswordError: '',
  updatePassword: false,
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
        me: null,
        isMailAuth: false,
        mailAuthError: '',
        email: '',
        isMailCheck: false,
        mailCheckError: '',
        checked: false,
        isGettingStore: false,
        getStoreError: '',
        store: [],
        isLoadingUser: false,
        loadUserError: '',
        load: [],
        isPuttingUser: false,
        putUserError: '',
        updateUser: false,
        isPuttingPassword: false,
        putPasswordError: '',
        updatePassword: false,
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
        isLoadingUser: true,
        loadUserError: '',
        me: null,
        load: [],
        updateUser: false,
        putUserError: '',
        putPasswordError: '',
        updatePassword: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
        loadUserError: '',
        me: action.payload.userData,
        load: [...action.payload.eventData],
        updateUser: false,
        putUserError: '',
        putPasswordError: '',
        updatePassword: false,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        loadUserError: action.error,
        me: null,
        load: [],
        updateUser: false,
        putUserError: '',
        putPasswordError: '',
        updatePassword: false,
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
      };
    case MAIL_CHECK_SUCCESS:
      return {
        ...state,
        isMailCheck: false,
        mailCheckError: '',
        checked: true,
      };
    case MAIL_CHECK_FAILURE:
      return {
        ...state,
        isMailCheck: false,
        mailCheckError: action.error,
        checked: false,
      };
    case STORE_LIST_REQUEST:
      return {
        ...state,
        isGettingStore: true,
        getStoreError: '',
        store: [],
      };
    case STORE_LIST_SUCCESS:
      return {
        ...state,
        isGettingStore: false,
        getStoreError: '',
        store: [...action.payload.data],
      };
    case STORE_LIST_FAILURE:
      return {
        ...state,
        isGettingStore: false,
        getStoreError: action.error,
        store: [],
      };
    case PUT_USER_REQUEST:
      return {
        ...state,
        isPuttingUser: true,
        putUserError: '',
        updateUser: false,
      };
    case PUT_USER_SUCCESS:
      return {
        ...state,
        isPuttingUser: false,
        putUserError: '',
        updateUser: true,
      };
    case PUT_USER_FAILURE:
      return {
        ...state,
        isPuttingUser: false,
        putUserError: action.error,
        updateUser: false,
      };
    case PUT_PASSWORD_REQUEST:
      return {
        ...state,
        isPuttingPassword: true,
        putPasswordError: '',
        updatePassword: false,
      };
    case PUT_PASSWORD_SUCCESS:
      return {
        ...state,
        isPuttingPassword: false,
        putPasswordError: '',
        updatePassword: true,
      };
    case PUT_PASSWORD_FAILURE:
      return {
        ...state,
        isPuttingPassword: false,
        putPasswordError: action.error,
        updatePassword: false,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
