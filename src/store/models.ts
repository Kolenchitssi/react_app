// types
import { store } from "./store";

export type BaseAction<T> = {
  type: string;
  payload: T;
};

export type ReducerType<S> = {
  [key: string]: (state: S, action: BaseAction<any>) => S;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type FormType = {
  title: string;
  text: string;
  date: string;
  author: string;
  id: string;
  key: string;
};
