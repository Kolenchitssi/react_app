import { ReducerType } from '../../../../store/models';
import { createReducer } from '../../../../store/utils';
import { SUCCESS_CONNECTED } from './actionConnected';

type StateLocal = {
  [key: string]: any;
};

const defaultState: StateLocal = {
  editSuccess: false,
};

const listReducer: ReducerType<StateLocal> = {
  [SUCCESS_CONNECTED]: (state, action) => ({
    ...state,
    editSuccess: action.payload,
  }),
};

export const connectedReducer = createReducer<StateLocal>(
  listReducer,
  defaultState
);
