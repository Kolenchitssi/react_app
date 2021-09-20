import { setIncrement, setDecrement, setVal, addVal } from '../store/action'; 
import { useAppSelector, useAppDispatch } from '../../../store/hook';

function CounterClassic():JSX.Element {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state=>state.counterClassicReducer.count);  
  const addValue:number = useAppSelector(state=>state.counterClassicReducer.addVal);

  const incrementNumber =(addVal:number) => {dispatch(setIncrement(1))}
  
  return (
    <div>
        <h4>With only Redax (not Redax Tooll Kits)</h4>
        <div style={{
          display:"flex", 
          justifyContent: 'space-around',
          backgroundColor:"#b4cce2",
          padding:'10px',
          margin:"5px 0",}}> 
              <div>
                <input 
                type='text'
                name="input" 
                id="addval1"
                value={addValue}
                onChange={e => {dispatch(setVal(Number(e.target.value)))}}
                />
                
                <button
                    className="btn btn-secondary"
                    aria-label="Increment value"
                    onClick={() => dispatch(addVal(addValue))}
                  > 
                  Add value
                </button>           
              </div>
        
              <div>
                <button
                  className="btn btn-secondary"
                  aria-label="Decrement value"
                  onClick={() =>{dispatch(setDecrement(1))}}
                >
                  -
                </button>

                <span style={{padding:"5px 10px",}}>{count}</span>
                
                <button
                  className="btn btn-primary"
                  aria-label="Increment value"
                  onClick={() => {incrementNumber(1)}}
                >
                  +
                </button>
            </div>
      </div>

    </div>
  )
}



export default CounterClassic;
