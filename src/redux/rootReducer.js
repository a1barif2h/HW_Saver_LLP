import { combineReducers } from "redux";
import apodReducer from "./home/apod/apodReducer";
import postsReducer from "./posts/postReducer";

const rootReducer = combineReducers({
  apod: apodReducer,
  posts: postsReducer,
});

export default rootReducer;
