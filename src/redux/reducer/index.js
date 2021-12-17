import { combineReducers } from "redux";
import gradientReducer from "./gradientReducer";

export default combineReducers({
  gradients: gradientReducer,
});
