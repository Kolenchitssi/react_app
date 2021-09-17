import CounterOld from '../Counter/CounterOld';
import Counter from '../Counter/Counter';
import CounterNew from '../Counter/CounterNew';

function Counters () :JSX.Element {
  return (
    <div>
    <CounterOld />      
    <Counter />
    <Counter />    
    <CounterNew/>
  </div>
  );
}

export default Counters;
