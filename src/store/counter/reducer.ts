let defaultState = {
  count: 0,
  addVal: 1,
}

type actionCounter ={
  type: string;
  payload: number;
}

export const counterClassicReducer = (state = defaultState, action:actionCounter) =>{
  switch (action.type) {
    case "DECREMENT_VAL":      
      return ({...state, count: state.count - action.payload});
    case "INCREMENT_VAL":      
      return ({...state, count: state.count - action.payload});
  
    default:
      return(state);
  }
}
