import CounterOld from '../../components/Counter/CounterOld';
import Counter from '../../components/Counter/Counter';
import CounterNew from '../../components/Counter/CounterNew';

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
