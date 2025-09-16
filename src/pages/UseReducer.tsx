import React, { useReducer } from "react";
import { counterReducer } from "./CounterReducer";
import type { CounterState } from './CounterReducer'

const initialState: CounterState = { count: 0 };

const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
