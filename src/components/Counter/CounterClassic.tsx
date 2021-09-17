import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../store/hook';

function CounterClassic():JSX.Element {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state=>state.counterClassicReducer.count);  
  const addVal:number = useAppSelector(state=>state.counterClassicReducer.addVal);

  const incrementNumber =(addVal:number) => {dispatch({type:'INCREMENT_VAL', payload: addVal})}
  
  return (
    <div>
      <h3>with only Redax (not Redax Tooll Kits)</h3>
      <button
        className="btn btn-secondary"
        aria-label="Decrement value"
        onClick={() =>{dispatch({type:'DECREMENT_VAL', payload:1})}}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="btn btn-primary"
        aria-label="Increment value"
        onClick={() => {incrementNumber(1)}}
      >
        +
      </button>
    </div>
  )
}



export default CounterClassic;
