import axios from "axios";
import {
  FETCH_APOD_FAILURE,
  FETCH_APOD_REQUEST,
  FETCH_APOD_SUCCESS,
} from "./apodTypes";

export const fetchApodRequest = () => {
  return {
    type: FETCH_APOD_REQUEST,
  };
};

const fetchApodSuccess = (data) => {
  return {
    type: FETCH_APOD_SUCCESS,
    payload: data,
  };
};

const fetchApodFailure = (error) => {
  return {
    type: FETCH_APOD_FAILURE,
    payload: error,
  };
};

export const fetchApod = () => {
  return (dispatch) => {
    dispatch(fetchApodRequest);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=3y0rgdKIN8rA8960JsiAHM0dVwnlr4ocM9vOFVbc"
      )
      .then((response) => {
        const data = response.data;
        dispatch(fetchApodSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchApodFailure(errorMsg));
      });
  };
};
