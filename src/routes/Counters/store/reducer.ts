import { BaseAction, ReducerType } from "../../../store/models";
import { createReducer } from "../../../store/utils";

type StateLocal = {
  count: number;
  addVal: number;
};

const defaultState: StateLocal = {
  count: 0,
  addVal: 1,
};

const listReducer: ReducerType<StateLocal> = {
  DECREMENT: (state, action: BaseAction<number>) => ({
    ...state,
    count: state.count - action.payload,
  }),
  INCREMENT: (state, action: BaseAction<number>) => ({
    ...state,
    count: state.count + action.payload,
  }),
  SET_VAL: (state, action: BaseAction<number>) => ({
    ...state,
    addVal: action.payload,
  }),
  ADD_VAL: (state, action: BaseAction<number>) => ({
    ...state,
    count: state.count + action.payload,
  }),
};
export const counterClassicReducerObj = createReducer<StateLocal>(
  listReducer,
  defaultState
);

// export function counterClassicReducerObj(
//   state = defaultState,
//   action: actionCounter
// ): StateLocal {
//   return listReducer[action.type]
//     ? listReducer[action.type](state, action)
//     : state;
// }
