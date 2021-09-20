import {articleType } from "../../Starter/store/action";

const defaultState = {
  articles : [
    {
    id: 0,
    key: '',
    text: '',
    date: '',
    author: '',
    }
  ]
  }

  type actionArticle ={
    type: string;
    payload: articleType;
  }

const reducerStarter =(state = defaultState, action:actionArticle) =>{

type reducerType = {
  [key:string]: () => object,
}  

  const keyReducer:reducerType = {
    ADD_ARTICLE: () => ({...state, articles : state.articles.push(action.payload)}),
    REMOVE_ARTICLE: () => ({...state, /*TODO*/}),
    EDIT_ARTICLE: () => ({...state, /*TODO*/}),    
  }  

  return keyReducer[action.type] ? keyReducer[action.type](): state;
 }

 export default reducerStarter;
