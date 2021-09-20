import { BaseAction, ReducerType } from "./models";

export function createAction<B>(type: string): (payload: B) => BaseAction<B> {
  return (payload: B) => ({ type, payload });
}

// numberAction=createAction<number>("INCREMENT");

export function createReducer<S>(
  listReducer: ReducerType<S>
): (state: S, action: BaseAction<any>) => S {
  return (state: S, action: BaseAction<any>) =>
    listReducer[action.type] ? listReducer[action.type](state, action) : state;
}

// createReduce
