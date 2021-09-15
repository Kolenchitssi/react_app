import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hook';
import {
  decrement,
  increment,
  incrementByAmount,  
  selectCount
} from './counterSliceReducer'


function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')  

  return (
    <div>
      <h3> use createSlice  </h3>
      <div style={{display:"flex", justifyContent: "space-around"}}>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className="btn btn-secondary"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        > 
        Add value
        </button>       
        </div>

        <div>
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
      </div>
    </div>
  )
}

export default Counter;
