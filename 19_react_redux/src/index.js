import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store";
import { composeWithDevTools } from "@redux-devtools/extension";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*const store = configureStore({ reducer });

function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}*/

//2. redux를 사용해 여러 개의 상태 관리, 코드 분리
//reducer 따로 만들기, store 관리하는 풀더 따로 만들기
//src//store/index.js : 스토어의 전체 상태 관리 및 하나로 통합
//src/store/module/counterReducer.js & src/stor/module/isLoggedinReducer.js
// : 각각 state를 관리하는 reducer
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
