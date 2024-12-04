import { Component } from "react";
import { connect } from "react-redux"; // 클래스 컴포넌트에서 리덕스를 연결하기 위한 함수

import classes from "./Counter.module.css";

class Counter extends Component {
  increHandler() {
    this.props.increment();
  }

  decreHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.count}</div>
        <div>
          <button onClick={this.increHandler.bind(this)}>Increment</button>
          <button onClick={this.decreHandler.bind(this)}>Decrement</button>
          <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
