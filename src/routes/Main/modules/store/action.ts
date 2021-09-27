// import { BaseAction } from "../../../../store/models";
import { createAction } from "../../../../store/utils";
import { PropsArticle } from "../../components/Article/Article";

export const ADD_ARTICLE = "ADD_ARTICLE";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const EDIT_ARTICLE = "EDIT_ARTICLE";

export const addArticle = createAction<PropsArticle>(ADD_ARTICLE);
export const removeArticle = createAction<PropsArticle>(REMOVE_ARTICLE);
export const editArticle = createAction<PropsArticle>(EDIT_ARTICLE);
