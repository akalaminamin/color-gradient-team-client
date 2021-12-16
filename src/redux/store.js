import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/index";
import logger from "redux-logger";

const middleware = [thunk];
if ((process.env.NODE_ENV === "development")) {
  middleware.push(logger);
}
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
