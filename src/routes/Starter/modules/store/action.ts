// import { BaseAction } from "../../../../store/models";
import { createAction } from "../../../../store/utils";

const ADD_ARTICLE: string = "ADD_ARTICLE";
const REMOVE_ARTICLE: string = "REMOVE_ARTICLE";
const EDIT_ARTICLE: string = "EDIT_ARTICLE";

export type ArticleType = {
  id: number;
  key: string;
  text: string;
  date: string;
  author: string;
};

export const addArticle = createAction<ArticleType>(ADD_ARTICLE);
export const removeArticle = createAction<ArticleType>(REMOVE_ARTICLE);
export const editArticle = createAction<ArticleType>(REMOVE_ARTICLE);

// export const addArticle = (article: ArticleType): BaseAction<ArticleType> => {
//   return {
//     type: ADD_ARTICLE,
//     payload: article,
//   };
// };
// export const removeArticle = (
//   article: ArticleType
// ): BaseAction<ArticleType> => {
//   return {
//     type: REMOVE_ARTICLE,
//     payload: article,
//   };
// };
// export const editArticle = (article: ArticleType): BaseAction<ArticleType> => {
//   return {
//     type: EDIT_ARTICLE,
//     payload: article,
//   };
// };
// сделали функцию
