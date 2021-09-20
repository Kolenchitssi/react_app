import { combineReducers } from "redux";
import { createStore } from "redux";

import  reducerStarter  from '../store/reducerStarter';


const rootReducer = combineReducers({
  reducerStarter,
})

export const store = createStore(rootReducer);



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
