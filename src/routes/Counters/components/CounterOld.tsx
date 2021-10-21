import React, { useState } from 'react';

function CounterOld(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div>
      <button type='button' className='btn btn-secondary' onClick={decrement}>
        Decrement
      </button>{' '}
      Value: {counter}{' '}
      <button type='button' className='btn btn-primary' onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default CounterOld;
