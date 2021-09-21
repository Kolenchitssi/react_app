import { BaseAction, ReducerType } from "../../../../store/models";
import { createReducer } from "../../../../store/utils";
import { ArticleType } from "./action";

type StateLocal = {
  // articles: Array<ArticleType>;
  articles: ArticleType[];
};

const defaultState: StateLocal = {
  articles: [
    {
      id: 0,
      key: "",
      text: "",
      date: "",
      author: "",
    },
  ],
};

const listReducer: ReducerType<StateLocal> = {
  ADD_ARTICLE: (
    state = defaultState,
    action: BaseAction<ArticleType>
  ): StateLocal => {
    const newArticle: ArticleType[] = state.articles.concat(action.payload);
    return {
      ...state,
      articles: newArticle,
    };
  },
  REMOVE_ARTICLE: (state = defaultState) => ({ ...state /*TODO*/ }),
  EDIT_ARTICLE: (state = defaultState) => ({ ...state /*TODO*/ }),
};

export const reducerStarter1 = createReducer<StateLocal>(
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
