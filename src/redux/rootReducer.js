import { combineReducers } from "redux";
import apodReducer from "./home/apod/apodReducer";

const rootReducer = combineReducers({
  apod: apodReducer,
});

export default rootReducer;
