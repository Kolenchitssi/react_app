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
    case "DECREMENT":      
      return ({...state, count: state.count - action.payload});
    case "INCREMENT":      
      return ({...state, count: state.count + action.payload});
    case "SET_VAL":      
      return ({...state, addVal: action.payload});
    case "ADD_VAL":      
      return ({...state, count: state.count + action.payload});
  
    default:
      return(state);
  }
}
