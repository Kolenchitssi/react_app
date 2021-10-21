import { setIncrement, setDecrement, setVal, addVal } from '../store/action';
import { useAppSelector, useAppDispatch } from '../../../store/hook';

function CounterClassic(): JSX.Element {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counterClassicReducerObj.count);
  const addValue: number = useAppSelector(
    state => state.counterClassicReducerObj.addVal
  );

  const incrementNumber = (addval = 1) => {
    dispatch(setIncrement(addval));
  };

  return (
    <div>
      <h4>With only Redax (not Redax Tooll Kits)</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: '#b4cce2',
          padding: '10px',
          margin: '5px 0',
        }}
      >
        <div>
          <input
            type='text'
            name='input'
            id='addval1'
            value={addValue}
            onChange={e => {
              dispatch(setVal(Number(e.target.value)));
            }}
          />

          <button
            type='button'
            className='btn btn-success'
            aria-label='Increment value'
            onClick={() => dispatch(addVal(addValue))}
          >
            Add value
          </button>
        </div>

        <div>
          <button
            type='button'
            className='btn btn-primary'
            aria-label='Decrement value'
            onClick={() => {
              dispatch(setDecrement(1));
            }}
          >
            -
          </button>

          <span style={{ padding: '5px 10px' }}>{count}</span>

          <button
            type='button'
            className='btn btn-danger'
            aria-label='Increment value'
            onClick={() => {
              incrementNumber(1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterClassic;
