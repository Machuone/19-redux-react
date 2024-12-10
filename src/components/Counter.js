import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { countActions } from "../store";

const Counter = () => {
  const increaseAmount = 5;
  const count = useSelector((state) => state.count);
  const showing = useSelector((state) => state.showing);
  const dispatch = useDispatch();

  // 왜 잔디 안심어짐
  const increaseHandler = (amount) => {
    dispatch(countActions.increase(amount));
  };
  const increHandler = () => {
    dispatch(countActions.increment());
  };
  const decreHandler = () => {
    dispatch(countActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(countActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showing ? count : ""}</div>
      <div>
        <button onClick={increHandler}>Increment</button>
        <button onClick={() => increaseHandler(increaseAmount)}>
          Increase by {increaseAmount}
        </button>
        <button onClick={decreHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
