// 액션 타입 정의
export const DRESS_RESET = 'DRESS_RESET';

export const DRESS_ALL_REQUEST = 'DRESS_ALL_REQUEST';
export const DRESS_ALL_SUCCESS = 'DRESS_ALL_SUCCESS';
export const DRESS_ALL_FAILURE = 'DRESS_ALL_FAILURE';

// 리듀서 초기값 정의
const initialState = {
  isFindingDresses: false,
  findDressError: '',
  dress: [],
};

const dressReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRESS_RESET:
      return {
        ...state,
        isFindingDresses: false,
        findDressError: '',
        dress: [],
      };
    case DRESS_ALL_REQUEST:
      return {
        ...state,
        isFindingDresses: true,
        findDressError: '',
        dress: [],
      };
    case DRESS_ALL_SUCCESS:
      return {
        ...state,
        isFindingDresses: false,
        findDressError: '',
        dress: action.payload.data,
      };
    case DRESS_ALL_FAILURE:
      return {
        ...state,
        isFindingDresses: false,
        findDressError: action.error,
        dress: [],
      };
    default: {
      return state;
    }
  }
};

export default dressReducer;
