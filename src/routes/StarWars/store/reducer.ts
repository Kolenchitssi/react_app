import { ReducerType } from "../../../store/models";
import { createReducer } from "../../../store/utils";
import { SET_PEOPLE_STAR_WARS, SET_PLANETS_STAR_WARS } from "./action";

type StateLocal = {
  [key: string]: any;
};

const defaultState: StateLocal = {
  people: []
};

const listReducer: ReducerType<StateLocal> = {
  [SET_PEOPLE_STAR_WARS]: (state: StateLocal, action) => {
    return {
      ...state,
      people: [...action.payload]
    }
  },

  [SET_PLANETS_STAR_WARS]: (state: StateLocal, action) => {
    return {
      ...state,
      planets: [...action.payload]
    }
  }

};

export const starWarReducer = createReducer<StateLocal>(
  listReducer,
  defaultState
);
