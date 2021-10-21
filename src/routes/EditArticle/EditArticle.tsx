import { useHistory, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { FormType } from '../../store/models';
import { editArticleToLocalStorage } from '../Main/modules/store/action';
import { ConnectedNewForm } from './ConnectedNewForm';

export const EditArticle = () => {
  const dispatch = useAppDispatch();
  const articleId: { id: string } = useParams();
  const resultId = articleId.id;

  const saveExistArticle = (currentArticles: FormType) => {
    dispatch(editArticleToLocalStorage(currentArticles));
  };

  const submitEdit = (values: FormType) => {
    saveExistArticle(values);
  };

  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };

  return (
    <ConnectedNewForm
      actionSubmit={submitEdit}
      typeAction='EDIT'
      actionCancel={goHome}
      IdProps={resultId}
    />
  );
};
