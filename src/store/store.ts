// import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore } from "redux";

import { counterClassicReducerObj } from "../routes/Counters/store/reducerCounter";
import { reducerStarter } from "../routes/Starter/modules/store/reducerStarter";

// import counterReducer from '../components/Counter/counterSliceReducer';
// import {reducer as counterNewReducer} from '../components/Counter/counterNewReducer';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     newCounter: counterNewReducer,
//   }
// })

// import { counterClassicReducer } from '../routes/Counters/store/reducer';

const rootReducer = combineReducers({
  // counterClassicReducer,
  counterClassicReducerObj,
  reducerStarter,
});

export const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
