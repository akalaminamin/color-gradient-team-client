import { combineReducers } from "redux";
import gradientReducer from "./gradientReducer";
import userReducer from "./userReducer";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  gradients: gradientReducer,
  firebase: firebaseReducer,
  user: userReducer,
});
