// 액션 타입 정의
export const DRESS_RESET = 'DRESS_RESET';

export const ALL_DRESS_REQUEST = 'ALL_DRESS_REQUEST';
export const ALL_DRESS_SUCCESS = 'ALL_DRESS_SUCCESS';
export const ALL_DRESS_FAILURE = 'ALL_DRESS_FAILURE';

export const GET_DRESS_REQUEST = 'GET_DRESS_REQUEST';
export const GET_DRESS_SUCCESS = 'GET_DRESS_SUCCESS';
export const GET_DRESS_FAILURE = 'GET_DRESS_FAILURE';

export const POST_EVENT_REQUEST = 'POST_EVENT_REQUEST';
export const POST_EVENT_SUCCESS = 'POST_EVENT_SUCCESS';
export const POST_EVENT_FAILURE = 'POST_EVENT_FAILURE';

export const POST_DRESS_REQUEST = 'POST_DRESS_REQUEST';
export const POST_DRESS_SUCCESS = 'POST_DRESS_SUCCESS';
export const POST_DRESS_FAILURE = 'POST_DRESS_FAILURE';

export const PUT_DRESS_REQUEST = 'PUT_DRESS_REQUEST';
export const PUT_DRESS_SUCCESS = 'PUT_DRESS_SUCCESS';
export const PUT_DRESS_FAILURE = 'PUT_DRESS_FAILURE';

export const SEARCH_DRESS_REQUEST = 'SEARCH_DRESS_REQUEST';
export const SEARCH_DRESS_SUCCESS = 'SEARCH_DRESS_SUCCESS';
export const SEARCH_DRESS_FAILURE = 'SEARCH_DRESS_FAILURE';

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
  isPostingEvent: false,
  postEventError: '',
  eventId: '',
  isPostingDress: false,
  postDressError: '',
  dressId: '',
  isPuttingDress: false,
  putDressError: '',
  putDress: false,
  isSearchingDress: false,
  searchDreseError: '',
  searchResult: [],
};

const dressReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRESS_RESET:
      return {
        ...state,
        isFindingDresses: false,
        findDressesError: '',
        dresses: [],
        isGettingDress: false,
        getDressError: '',
        dress: {},
        events: [],
        images: [],
        isPostingEvent: false,
        postEventError: '',
        eventId: '',
        isPostingDress: false,
        postDressError: '',
        dressId: '',
        isPuttingDress: false,
        putDressError: '',
        putDress: false,
        isSearchingDress: false,
        searchDreseError: '',
        searchResult: [],
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
    case POST_EVENT_REQUEST:
      return {
        ...state,
        isPostingEvent: true,
        postEventError: '',
        eventId: '',
      };
    case POST_EVENT_SUCCESS:
      return {
        ...state,
        isPostingEvent: false,
        postEventError: '',
        eventId: action.payload,
      };
    case POST_EVENT_FAILURE:
      return {
        ...state,
        isPostingEvent: false,
        postEventError: action.error,
        eventId: '',
      };
    case POST_DRESS_REQUEST:
      return {
        ...state,
        isPostingDress: true,
        postDressError: '',
        dressId: '',
      };
    case POST_DRESS_SUCCESS:
      return {
        ...state,
        isPostingDress: false,
        postDressError: '',
        dressId: action.payload.data,
      };
    case POST_DRESS_FAILURE:
      return {
        ...state,
        isPostingDress: false,
        postDressError: action.error,
        dressId: '',
      };
    case PUT_DRESS_REQUEST:
      return {
        ...state,
        isPuttingDress: true,
        putDressError: '',
        putDress: false,
      };
    case PUT_DRESS_SUCCESS:
      return {
        ...state,
        isPuttingDress: false,
        putDressError: '',
        putDress: true,
        dress: { ...action.payload.dressData },
        images: [...action.payload.imageData],
      };
    case PUT_DRESS_FAILURE:
      return {
        ...state,
        isPuttingDress: false,
        putDressError: action.error,
        putDress: false,
      };
    case SEARCH_DRESS_REQUEST:
      return {
        ...state,
        isSearchingDress: true,
        searchDreseError: '',
        searchResult: [],
      };
    case SEARCH_DRESS_SUCCESS:
      return {
        ...state,
        isSearchingDress: false,
        searchDreseError: '',
        searchResult: [...action.payload.data],
      };
    case SEARCH_DRESS_FAILURE:
      return {
        ...state,
        isSearchingDress: false,
        searchDreseError: action.error,
        searchResult: [],
      };
    default: {
      return state;
    }
  }
};

export default dressReducer;
