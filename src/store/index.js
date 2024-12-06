import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0, showing: true };

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // 리덕스 툴킷에서 immer라는 패키지를 통해
      // 기존 상태를 변경할 수 없게 해줌
      // 따라서 기존 상태를 변경하는 코드를 작성해도
      // 내부적으로 변경되지 않게 설정해줌
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggle(state) {
      state.showing = !state.showing;
    },
  },
});

// configureStore를 이용하여 모든 리듀서를 하나의 큰 리듀서로 병합
const store = configureStore({
  reducer: countSlice.reducer,
});

export const countActions = countSlice.actions;
export default store;
