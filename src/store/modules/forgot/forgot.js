// 액션 타입 정의
export const FORGOT_RESET = 'FORGOT_RESET';

export const FORGOT_STORE_REQUEST = 'FORGOT_STORE_REQUEST';
export const FORGOT_STORE_SUCCESS = 'FORGOT_STORE_SUCCESS';
export const FORGOT_STORE_FAILURE = 'FORGOT_STORE_FAILURE';

export const FORGOT_MAIL_REQUEST = 'FORGOT_MAIL_REQUEST';
export const FORGOT_MAIL_SUCCESS = 'FORGOT_MAIL_SUCCESS';
export const FORGOT_MAIL_FAILURE = 'FORGOT_MAIL_FAILURE';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

// 리듀서 초기값 정의
const initialState = {
  isFindingStore: false,
  findStoreError: '',
  isFindingMail: false,
  findMailError: '',
  isFindingPassword: false,
  findPasswordError: '',
  store: [],
  user: [],
  changed: false,
};

const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_RESET:
      return {
        ...state,
        isFindingStore: false,
        findStoreError: '',
        isFindingMail: false,
        findMailError: '',
        isFindingPassword: false,
        findPasswordError: '',
        store: [],
        user: [],
        changed: false,
      };
    case FORGOT_STORE_REQUEST:
      return {
        ...state,
        isFindingStore: true,
        findStoreError: '',
        store: [],
      };
    case FORGOT_STORE_SUCCESS:
      return {
        ...state,
        isFindingStore: false,
        findStoreError: '',
        store: action.payload.data,
      };
    case FORGOT_STORE_FAILURE:
      return {
        ...state,
        isFindingStore: false,
        findStoreError: action.error,
        store: [],
      };
    case FORGOT_MAIL_REQUEST:
      return {
        ...state,
        isFindingMail: true,
        findMailError: '',
        user: [],
      };
    case FORGOT_MAIL_SUCCESS:
      return {
        ...state,
        isFindingMail: false,
        findMailError: '',
        user: action.payload.email,
      };
    case FORGOT_MAIL_FAILURE:
      return {
        ...state,
        isFindingMail: false,
        findMailError: action.error,
        user: [],
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isFindingPassword: true,
        findPasswordError: '',
        changed: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isFindingPassword: false,
        findPasswordError: '',
        changed: true,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isFindingPassword: false,
        findPasswordError: action.error,
        changed: false,
      };
    default: {
      return state;
    }
  }
};

export default forgotReducer;
