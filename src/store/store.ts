import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../components/Counter/counterSliceReducer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})

