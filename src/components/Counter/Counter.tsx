import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../store/hook';
import {
  decrement,
  increment,
  incrementByAmount,
  // incrementAsync,
  selectCount
} from './counterSliceReducer'


function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')  

  return (
    <div>
      <h3> use createSlice  </h3>
      <div className="row">
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
  )
}

export default Counter;
