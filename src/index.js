import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import {rrfProps} from "./redux/store"
import {
  ReactReduxFirebaseProvider
} from 'react-redux-firebase'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
