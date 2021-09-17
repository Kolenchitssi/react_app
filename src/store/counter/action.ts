const INCREMENT: string = 'INCREMENT';
const DECREMENT: string = 'DECREMENT';
const SET_VAL: string = 'SET_VAL';
const ADD_VAL: string = 'ADD_VAL';

type actionCounter ={
  type: string;
  payload: number;  
}

export const setIncrement=(val:number):actionCounter=> {return (
  {
  type: INCREMENT,
  payload: val,
  }
  )
};

export const setDecrement=(val:number):actionCounter=> {return (
  {
  type: DECREMENT,
  payload: val,
  }
  )
};

export const setVal=(val:number):actionCounter=> {return (
  {
  type: SET_VAL,
  payload: val,
  }
  )
};
export const addVal=(val:number):actionCounter=> {return (
  {
  type: ADD_VAL,
  payload: val,
  }
  )
};
