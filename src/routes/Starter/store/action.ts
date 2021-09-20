const ADD_ARTICLE: string = 'ADD_ARTICLE';
const REMOVE_ARTICLE: string = 'REMOVE_ARTICLE';
const EDIT_ARTICLE: string = 'EDIT_ARTICLE';


type actionArticle ={
  type: string;
  payload: object;  
}

export type articleType = {
  id: number;
  key: string;
  text: string;
  date: string;
  author: string;
}

export const addArticle=(article:articleType):actionArticle=> {return (
  {
  type: ADD_ARTICLE,
  payload: article,
  }
  )
};


export const removeArticle=(article:articleType):actionArticle=> {return (
  {
  type: REMOVE_ARTICLE,
  payload: article,
  }
  )
};

export const editArticle=(article:articleType):actionArticle=> {return (
  {
  type: EDIT_ARTICLE,
  payload: article,
  }
  )
};
