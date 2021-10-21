import { createAction } from "../../../store/utils";

export const INCREMENT: string = "INCREMENT";
export const DECREMENT: string = "DECREMENT";
export const SET_VAL: string = "SET_VAL";
export const ADD_VAL: string = "ADD_VAL";

export const setIncrement = createAction<number>(INCREMENT);
export const setDecrement = createAction<number>(DECREMENT);
export const setVal = createAction<number>(SET_VAL);
export const addVal = createAction<number>(ADD_VAL);
