type StateLocal = {
  count: number;
  addVal: number;
};

const defaultState: StateLocal = {
  count: 0,
  addVal: 1,
};

type actionCounter = {
  type: string;
  payload: number;
};

type CounterReducerType = {
  [key: string]: (state: StateLocal, action: actionCounter) => StateLocal;
};

const counterReducer: CounterReducerType = {
  DECREMENT: (state = defaultState, action: actionCounter) => ({
    ...state,
    count: state.count - action.payload,
  }),
  INCREMENT: (state = defaultState, action: actionCounter) => ({
    ...state,
    count: state.count + action.payload,
  }),
  SET_VAL: (state = defaultState, action: actionCounter) => ({
    ...state,
    addVal: action.payload,
  }),
  ADD_VAL: (state = defaultState, action: actionCounter) => ({
    ...state,
    count: state.count + action.payload,
  }),
};

export function counterClassicReducerObj(
  state = defaultState,
  action: actionCounter
): StateLocal {
  return counterReducer[action.type]
    ? counterReducer[action.type](state, action)
    : state;
}
