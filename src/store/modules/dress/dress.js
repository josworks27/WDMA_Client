// 액션 타입 정의
export const DRESS_RESET = 'DRESS_RESET';

export const ALL_DRESS_REQUEST = 'ALL_DRESS_REQUEST';
export const ALL_DRESS_SUCCESS = 'ALL_DRESS_SUCCESS';
export const ALL_DRESS_FAILURE = 'ALL_DRESS_FAILURE';

export const GET_DRESS_REQUEST = 'GET_DRESS_REQUEST';
export const GET_DRESS_SUCCESS = 'GET_DRESS_SUCCESS';
export const GET_DRESS_FAILURE = 'GET_DRESS_FAILURE';

// 리듀서 초기값 정의
const initialState = {
  isFindingDresses: false,
  findDressesError: '',
  dresses: [],
  isGettingDress: false,
  getDressError: '',
  dress: {},
  events: [],
  images: [],
};

const dressReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRESS_RESET:
      return {
        ...state,
        isFindingDresses: false,
        findDressesError: '',
        dresses: [],
      };
    case ALL_DRESS_REQUEST:
      return {
        ...state,
        isFindingDresses: true,
        findDressesError: '',
        dresses: [],
      };
    case ALL_DRESS_SUCCESS:
      return {
        ...state,
        isFindingDresses: false,
        findDressesError: '',
        dresses: action.payload.data,
      };
    case ALL_DRESS_FAILURE:
      return {
        ...state,
        isFindingDresses: false,
        findDressesError: action.error,
        dresses: [],
      };
    case GET_DRESS_REQUEST:
      return {
        ...state,
        isGettingDress: true,
        getDressError: '',
        dress: {},
        events: [],
        images: [],
      };
    case GET_DRESS_SUCCESS:
      return {
        ...state,
        isGettingDress: false,
        getDressError: '',
        dress: { ...action.payload.dressData },
        events: [...action.payload.eventData],
        images: [...action.payload.imageData],
      };
    case GET_DRESS_FAILURE:
      return {
        ...state,
        isGettingDress: false,
        getDressError: action.error,
        dress: {},
        events: [],
        images: [],
      };
    default: {
      return state;
    }
  }
};

export default dressReducer;
