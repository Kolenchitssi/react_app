import { useAppSelector } from "../../../../store/hook";
import { BaseAction, ReducerType } from "../../../../store/models";
import { createReducer } from "../../../../store/utils";
import { PropsArticle } from "../../components/Article/Article";
import { articlesList } from "../../components/Article/articlesList";
import { ADD_ARTICLE, EDIT_ARTICLE, REMOVE_ARTICLE } from "./action";

type StateLocal = PropsArticle[];

const defaultState: StateLocal = articlesList;

const listReducer: ReducerType<StateLocal> = {
  [ADD_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<PropsArticle>
  ): StateLocal => {
    return state.concat(action.payload);
  },

  [REMOVE_ARTICLE]: (state) => ({ ...state /*TODO*/ }),

  [EDIT_ARTICLE]: (
    state: StateLocal,
    action: BaseAction<PropsArticle>
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
