import { useAppSelector } from "../../../../store/hook";
import { BaseAction, FormType, ReducerType } from "../../../../store/models";
import { createReducer } from "../../../../store/utils";

import { articlesList } from "../../components/Article/articlesList";
import { ADD_ARTICLE, EDIT_ARTICLE, REMOVE_ARTICLE } from "./action";

type StateLocal = FormType[];

const defaultState: StateLocal = articlesList;

const listReducer: ReducerType<StateLocal> = {
  [ADD_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<FormType>
  ): StateLocal => {
    return state.concat(action.payload);
  },

  [REMOVE_ARTICLE]: (state) => ({ ...state /*TODO*/ }),

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
