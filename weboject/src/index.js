import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import loading from "./images/loading.gif";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, $CombinedState } from "redux";

import rootReducer from "./reducers/rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />

    <div id="loading">
      <img src={loading} alt="Loading..." />
    </div>
  </Provider>,
  document.getElementById("root")
);
