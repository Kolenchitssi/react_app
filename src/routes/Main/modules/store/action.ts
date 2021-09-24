// import { BaseAction } from "../../../../store/models";
import { createAction } from "../../../../store/utils";
import { PropsArticle } from "../../components/Article/Article";

const ADD_ARTICLE: string = "ADD_ARTICLE";
const REMOVE_ARTICLE: string = "REMOVE_ARTICLE";
const EDIT_ARTICLE: string = "EDIT_ARTICLE";

export const addArticle = createAction<PropsArticle>(ADD_ARTICLE);
export const removeArticle = createAction<PropsArticle>(REMOVE_ARTICLE);
export const editArticle = createAction<PropsArticle>(EDIT_ARTICLE);
