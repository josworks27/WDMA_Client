// 액션 타입 정의
export const FORGOT_STORE_REQUEST = 'FORGOT_STORE_REQUEST';
export const FORGOT_STORE_SUCCESS = 'FORGOT_STORE_SUCCESS';
export const FORGOT_STORE_FAILURE = 'FORGOT_STORE_FAILURE';

export const FORGOT_MAIL_REQUEST = 'FORGOT_MAIL_REQUEST';
export const FORGOT_MAIL_SUCCESS = 'FORGOT_MAIL_SUCCESS';
export const FORGOT_MAIL_FAILURE = 'FORGOT_MAIL_FAILURE';

// 리듀서 초기값 정의
const initialState = {
  isFindingStore: false,
  findStoreError: '',
  isFindingMail: false,
  findMailError: '',
  store: [],
  user: [],
};

const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default forgotReducer;
