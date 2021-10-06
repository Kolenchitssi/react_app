// import { BaseAction } from "../../../../store/models";
import { FormType } from "../../../../store/models";
import { createAction } from "../../../../store/utils";

export const ADD_ARTICLE = "ADD_ARTICLE";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const GET_ARTICLE = "GET_ARTICLE";
export const SET_ARTICLE_TO_STATE = "SET_ARTICLE_TO_STATE";

export const addArticle = createAction<FormType>(ADD_ARTICLE);
export const removeArticle = createAction<string>(REMOVE_ARTICLE);
export const editArticle = createAction<FormType>(EDIT_ARTICLE);
export const getArticle = createAction<void>(GET_ARTICLE);
export const setArticleToState = createAction<FormType[]>(SET_ARTICLE_TO_STATE);
