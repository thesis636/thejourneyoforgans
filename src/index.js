import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import "./animation.css";
// import "./load-image-bg.css";
// import "./components/backgrounds/chapter-0/style.css"
// import "./components/backgrounds/chapter-1/style.css"
// import "./components/backgrounds/chapter-2/style.css"
// import "./components/backgrounds/chapter-3/style.css"
// import "./components/backgrounds/chapter-4/style.css"
const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

console.time();
// window.addEventListener("DOMContentLoaded", (event) => {
//   console.timeEnd()
//   console.log("DOM fully loaded and parsed");
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
