// import { BaseAction } from "../../../../store/models";
import { FormType } from "../../../../store/models";
import { createAction } from "../../../../store/utils";

export const ADD_ARTICLE = "ADD_ARTICLE";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const EDIT_ARTICLE = "EDIT_ARTICLE";

export const addArticle = createAction<FormType>(ADD_ARTICLE);
export const removeArticle = createAction<FormType>(REMOVE_ARTICLE);
export const editArticle = createAction<FormType>(EDIT_ARTICLE);
