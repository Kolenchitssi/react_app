import { BaseAction, ReducerType } from './models';

export function createAction<B>(type: string): (payload: B) => BaseAction<B> {
  return (payload: B) => ({ type, payload });
}

export function createReducer<S>(
  listReducer: ReducerType<S>,
  defaultState: S
): (state: S | undefined, action: BaseAction<any>) => S {
  return (state = defaultState, action: BaseAction<any>): S =>
    listReducer[action.type] ? listReducer[action.type](state, action) : state;
}
