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

type actionArticle = {
  type: string;
  payload: ArticleType;
};

export type ReducerType = {
  [key: string]: (state: StateLocal, action: actionArticle) => StateLocal;
};

const keyReducer: ReducerType = {
  ADD_ARTICLE: (state = defaultState, action: actionArticle): StateLocal => {
    const newArticle: ArticleType[] = state.articles.concat(action.payload);
    return {
      ...state,
      articles: newArticle,
    };
  },
  REMOVE_ARTICLE: (state = defaultState) => ({ ...state /*TODO*/ }),
  EDIT_ARTICLE: (state = defaultState) => ({ ...state /*TODO*/ }),
};

export function reducerStarter(
  state = defaultState,
  action: actionArticle
): StateLocal {
  return keyReducer[action.type]
    ? keyReducer[action.type](state, action)
    : state;
}
