import { useAppSelector } from '../../../../store/hook';
import { BaseAction, FormType, ReducerType } from '../../../../store/models';
import { createReducer } from '../../../../store/utils';

import { articlesList } from '../../../Article/articlesList';
import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLE,
  REMOVE_ARTICLE,
  SET_ARTICLE_TO_STATE,
} from './action';

type StateLocal = FormType[];

const initialState = [
  {
    id: '',
    key: '',
    title: '',
    text: '',
    picture: '',
    date: new Date(),
    author: '',
  },
];

const defaultState: StateLocal = initialState;

const listReducer: ReducerType<StateLocal> = {
  [ADD_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<FormType>
  ): StateLocal => state.concat(action.payload),

  [SET_ARTICLE_TO_STATE]: (
    state: StateLocal,
    action: BaseAction<FormType[]>
  ): StateLocal => action.payload,

  [REMOVE_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<string>
  ): StateLocal => state.filter(item => item.id !== action.payload),

  [EDIT_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<FormType>
  ): StateLocal =>
    state.map(item => {
      if (item.id === action.payload.id) {
        return action.payload;
      }
      return item;
    }),
};

export const reducerStarter = createReducer<StateLocal>(
  listReducer,
  defaultState
);
