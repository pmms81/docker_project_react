import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import {
  increment,
  decrement,
  increment2X,
} from "../../state/Counter/CounterSlice";

const Counter = () => {
  //const count = useSelector((state: RootState) => state.counter.value);
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment2X())}>Increment2X</button>
    </>
  );
};

export default Counter;
