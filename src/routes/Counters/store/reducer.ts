import { BaseAction, ReducerType } from '../../../store/models';
import { createReducer } from '../../../store/utils';
import { ADD_VAL, DECREMENT, INCREMENT, SET_VAL } from './action';

type StateLocal = {
  count: number;
  addVal: number;
};

const defaultState: StateLocal = {
  count: 0,
  addVal: 1,
};

const listReducer: ReducerType<StateLocal> = {
  [DECREMENT]: (state, action: BaseAction<number>) => ({
    ...state,
    count: state.count - action.payload,
  }),
  [INCREMENT]: (state, action: BaseAction<number>) => ({
    ...state,
    count: state.count + action.payload,
  }),
  [SET_VAL]: (state, action: BaseAction<number>) => ({
    ...state,
    addVal: action.payload,
  }),
  [ADD_VAL]: (state, action: BaseAction<number>) => ({
    ...state,
    count: state.count + action.payload,
  }),
};
export const counterClassicReducerObj = createReducer<StateLocal>(
  listReducer,
  defaultState
);
