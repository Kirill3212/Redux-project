import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { spamFilter } from "./redux/middleware";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
