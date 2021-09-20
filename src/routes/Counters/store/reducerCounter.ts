const defaultState = {
  count: 0,
  addVal: 1,
}

type actionCounter ={
  type: string;
  payload: number;
}

const counterClassicReducerObj =(state = defaultState, action:actionCounter) =>{

type counterReducerType = {
  [key:string]: () => object,
}  

  const CounterReducer:counterReducerType = {
    DECREMENT_VAL: () => ({...state, count: state.count - action.payload}),
    INCREMENT_VAL: () => ({...state, count: state.count - action.payload}),
    SET_VAL: () => ({...state, addVal: action.payload}),
    ADD_VAL: () => ({...state, count: state.count + action.payload}),   
  }  

  return CounterReducer[action.type]() ? CounterReducer[action.type]: state;
 }

 export default counterClassicReducerObj;

