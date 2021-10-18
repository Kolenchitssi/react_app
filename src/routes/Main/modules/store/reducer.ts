import { useAppSelector } from "../../../../store/hook";
import { BaseAction, FormType, ReducerType } from "../../../../store/models";
import { createReducer } from "../../../../store/utils";

import { articlesList } from "../../components/Article/articlesList";
import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLE,
  REMOVE_ARTICLE,
  SET_ARTICLE_TO_STATE,
} from "./action";

type StateLocal = FormType[];

const initialState = [
  {
    id: "",
    key: "",
    title: "",
    text: "",
    picture: "",
    date: new Date(),
    author: "",
  },
];

const defaultState: StateLocal = initialState; // getLocalStorage();

const listReducer: ReducerType<StateLocal> = {
  [ADD_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<FormType>
  ): StateLocal => {
    return state.concat(action.payload);
  },

  // [GET_ARTICLE]: (
  //   state: StateLocal,
  //   action: BaseAction<FormType[]>
  // ): StateLocal => {
  //   console.log(action.payload);
  //   return state;
  // },

  //записывает в стэйт  список артиклей  считаных из LocalStorage
  [SET_ARTICLE_TO_STATE]: (
    state: StateLocal,
    action: BaseAction<FormType[]>
  ): StateLocal => {
    // console.log(action.payload);
    return action.payload;
  },

  [REMOVE_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<string>
  ): StateLocal => {
    return state.filter((item) => {
      return item.id !== action.payload;
    });
  },

  [EDIT_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<FormType>
  ): StateLocal => {
    return state.map((item) => {
      if (item.id === action.payload.id) return action.payload;
      else return item;
    });

    // console.log(allArticles, "весь список", "заменяем на ", action.payload);
  },
};

export const reducerStarter = createReducer<StateLocal>(
  listReducer,
  defaultState
);

// export function reducerStarter(
//   state = defaultState,
//   action: BaseAction<ArticleType>
// ): StateLocal {
//   return listReducer[action.type]
//     ? listReducer[action.type](state, action)
//     : state;
// }
