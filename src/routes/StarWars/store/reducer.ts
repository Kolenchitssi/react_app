import { ReducerType } from "../../../store/models";
import { createReducer } from "../../../store/utils";
import { GET_STAR_WARS } from "./action";

type StateLocal = {
  [key: string]: any;
};

const defaultState: StateLocal = {};

const listReducer: ReducerType<StateLocal> = {
  [GET_STAR_WARS]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
};

export const starWarReducer = createReducer<StateLocal>(
  listReducer,
  defaultState
);
