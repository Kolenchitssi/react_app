import { createAction } from "../../../store/utils";

const INCREMENT: string = "INCREMENT";
const DECREMENT: string = "DECREMENT";
const SET_VAL: string = "SET_VAL";
const ADD_VAL: string = "ADD_VAL";

export const setIncrement = createAction<number>(INCREMENT);
export const setDecrement = createAction<number>(DECREMENT);
export const setVal = createAction<number>(SET_VAL);
export const addVal = createAction<number>(ADD_VAL);

// type actionCounter = {
//   type: string;
//   payload: number;
// };

// export const setDecrement = (val: number): actionCounter => {
//   return {
//     type: DECREMENT,
//     payload: val,
//   };
// };

// export const setVal = (val: number): actionCounter => {
//   return {
//     type: SET_VAL,
//     payload: val,
//   };
// };

// export const addVal = (val: number): actionCounter => {
//   return {
//     type: ADD_VAL,
//     payload: val,
//   };
// };
