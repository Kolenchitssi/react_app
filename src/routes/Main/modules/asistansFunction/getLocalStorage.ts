import { articlesList } from '../../../Article/articlesList';

export const getLocalStorage = () => {
  if (!localStorage.length || !localStorage.getItem('articles')) {
    localStorage.setItem('articles', JSON.stringify(articlesList));
  }
  const localStorageList = localStorage.getItem('articles') || '';

  return JSON.parse(localStorageList);
};
