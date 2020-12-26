import {
  FETCH_APOD_FAILURE,
  FETCH_APOD_REQUEST,
  FETCH_APOD_SUCCESS,
} from "./apodTypes";

const apodInitialState = {
  loading: false,
  data: [],
  error: "",
};

const apodReducer = (state = apodInitialState, action) => {
  switch (action.type) {
    case FETCH_APOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_APOD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_APOD_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apodReducer;
