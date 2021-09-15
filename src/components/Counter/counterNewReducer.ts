import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

export const increment = createAction<number|void>('increment')
export const decrement = createAction<number|void>('decrement')

export type myCounter = {
  value: number;
}

export const reducer = createReducer({ value: 0 }, (builder) =>
  builder
    .addCase(increment, (state: myCounter, action: PayloadAction<number|void>) => ({ ...state, value: state.value + (action.payload || 1) }
    ))
    .addCase(decrement, (state:myCounter, action: PayloadAction<number|void>) => ({ ...state, value: state.value - (action.payload || 1) }
    ))
)
