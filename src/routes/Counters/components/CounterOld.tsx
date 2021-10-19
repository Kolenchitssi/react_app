import React, { useState } from "react";

function CounterOld(): JSX.Element {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  // View: the UI definition
  return (
    <div>
      <button type="button" className="btn btn-secondary" onClick={decrement}>
        Decrement
      </button>{" "}
      Value: {counter}{" "}
      <button type="button" className="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default CounterOld;
