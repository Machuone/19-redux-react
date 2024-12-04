import { createStore } from "redux";

// 여러 state props 존재 시 타겟 props를 제외한 props들도 값 설정해줘야 함을 주의
const reducer = (state = { count: 0, showing: true }, action) => {
  if (action.type === "increment")
    return { count: state.count + 1, showing: state.showing };
  if (action.type === "decrement")
    return { count: state.count - 1, showing: state.showing };

  // 하드코딩 (지양)
  // if (action.type === "increase") return { count: state.count + 5 };
  // action.[key] 로 동적 연결
  if (action.type === "increase")
    return { count: state.count + action.amount, showing: state.showing };

  if (action.type === "toggle")
    return { count: state.count, showing: !state.showing };

  return state;
};

const store = createStore(reducer);

export default store;
