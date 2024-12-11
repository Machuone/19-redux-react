import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// configureStore를 이용하여 모든 리듀서를 하나의 큰 리듀서로 병합
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
