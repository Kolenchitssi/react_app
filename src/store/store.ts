import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import counterReducer from '../components/Counter/counterSliceReducer';
import {reducer as counterNewReducer} from '../components/Counter/counterNewReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    newCounter: counterNewReducer,
  }
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
// Export a hook that can be reused to resolve types

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

