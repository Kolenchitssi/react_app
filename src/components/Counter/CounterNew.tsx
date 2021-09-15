import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, myCounter } from "./counterNewReducer";

function CounterNew() {
  const dispatch = useDispatch();
  const count = useSelector((state: any)=>state.newCounter.value)
  return (
    <div>
      <h3> use createReducer and createAction </h3>
      <button
        className="btn btn-secondary"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span>{count}</span>
      <button
        className="btn btn-primary"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  )
}

export default CounterNew;
