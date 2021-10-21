import { FormType, RootState } from '../../../../store/models';

const refreshLocalStorage = (newLocalStorage: FormType[]) =>
  localStorage.setItem('articles', JSON.stringify(newLocalStorage));

export default refreshLocalStorage;
