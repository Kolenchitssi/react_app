import CounterOld from "./components/CounterOld";

import CounterClassic from "./components/CounterClassic";

function Counters(): JSX.Element {
  return (
    <div className="inMain">
      <CounterOld />
      <CounterClassic />
    </div>
  );
}

export default Counters;
