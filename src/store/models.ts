// types
import { RootState } from "./store";

export type BaseAction<T> = {
  type: string;
  payload: T;
};

export type ReducerType<S> = {
  [key: string]: (state: S, action: BaseAction<any>) => S;
};
