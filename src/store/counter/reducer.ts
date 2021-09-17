import { createStore } from "redux";

const defaultState = {
  count: 0,
  addVal: 1
}

type actionCounter ={
  type: string;
  payload: number;
}

export const counter3Reducer = (state = defaultState, action:actionCounter) =>{
  switch (action.type) {
    case "DECREMENT_VAL":      
      return ({...state, count: state.count - action.payload});
    case "INCREMENT_VAL":      
      return ({...state, count: state.count - action.payload});
  
    default:
      return(state);
  }
}

export const myStore=createStore(counter3Reducer);

export type stateCount3 = {
  count: number;
  addVal: number;
}
