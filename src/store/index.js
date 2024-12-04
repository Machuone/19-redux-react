import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "decrement") return { count: state.count - 1 };

  // 하드코딩 (지양)
  // if (action.type === "increase") return { count: state.count + 5 };
  // action.[key] 로 동적 연결
  if (action.type === "increase") return { count: state.count + action.amount };

  return state;
};

const store = createStore(reducer);

export default store;
