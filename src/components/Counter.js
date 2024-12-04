import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const increaseAmount = 5;
  const counter = useSelector((state) => state.count);
  const showing = useSelector((state) => state.showing);
  const dispatch = useDispatch();

  const increaseHandler = (amount) => {
    dispatch({ type: "increase", amount: amount });
  };
  const increHandler = () => {
    dispatch({ type: "increment" });
  };
  const decreHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showing ? counter : ""}</div>
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
