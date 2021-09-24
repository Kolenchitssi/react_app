import { BaseAction, ReducerType } from "../../../../store/models";
import { createReducer } from "../../../../store/utils";
import { PropsArticle } from "../../components/Article/Article";
import { articlesList } from "../../components/Article/articlesList";

type StateLocal = {
  articles: Array<PropsArticle>;
};

const defaultState: StateLocal = { articles: articlesList };

const listReducer: ReducerType<StateLocal> = {
  ADD_ARTICLE: (
    state = defaultState,
    action: BaseAction<PropsArticle>
  ): StateLocal => {
    const newArticle: PropsArticle[] = state.articles.concat(action.payload);
    return {
      ...state,
      articles: newArticle,
    };
  },
  REMOVE_ARTICLE: (state = defaultState) => ({ ...state /*TODO*/ }),
  EDIT_ARTICLE: (state = defaultState) => ({ ...state /*TODO*/ }),
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
