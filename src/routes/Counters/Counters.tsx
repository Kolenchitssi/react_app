import CounterOld from './components/CounterOld';

import CounterClassic from './components/CounterClassic';

function Counters () :JSX.Element {
  return (
    <div>
    <CounterOld />   
    <CounterClassic/>
  </div>
  );
}

export default Counters;
