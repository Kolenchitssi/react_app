import CounterOld from '../Counter/CounterOld';

import CounterClassic from '../Counter/CounterClassic';

function Counters () :JSX.Element {
  return (
    <div>
    <CounterOld />   
    <CounterClassic/>
  </div>
  );
}

export default Counters;
