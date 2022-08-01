// import { BaseAction } from "../../../../store/models";
import { FormType } from '../../../../store/models';
import { createAction } from '../../../../store/utils';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const GET_ARTICLE = 'GET_ARTICLE';
export const SET_ARTICLE_TO_STATE = 'SET_ARTICLE_TO_STATE';
export const REMOVE_ARTICLE_LOCALSTORAGE = 'REMOVE_ARTICLE_LOCALSTORAGE';
export const ADD_ARTICLE_LOCALSTORAGE = 'ADD_ARTICLE_LOCALSTORAGE';
export const EDIT_ARTICLE_LOCALSTORAGE = 'EDIT_ARTICLE_LOCALSTORAGE';

export const addArticle = createAction<FormType>(ADD_ARTICLE);
export const removeArticle = createAction<string>(REMOVE_ARTICLE);
export const editArticle = createAction<FormType>(EDIT_ARTICLE);
export const getArticle = createAction<void>(GET_ARTICLE);
export const setArticleToState = createAction<FormType[]>(SET_ARTICLE_TO_STATE);
export const removeArticleLocalStorage = createAction<string>(
  REMOVE_ARTICLE_LOCALSTORAGE
);
export const addArticleToLocalStorage = createAction<FormType>(
  ADD_ARTICLE_LOCALSTORAGE
);
export const editArticleToLocalStorage = createAction<FormType>(
  EDIT_ARTICLE_LOCALSTORAGE
);
