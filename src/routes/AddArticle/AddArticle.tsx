/* eslint-disable no-param-reassign */
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../store/hook';
import { FormType } from '../../store/models';
import { addArticleToLocalStorage } from '../Main/modules/store/action';
// import { PropsArticle } from "../Article/Article";
import { NewForm } from '../../components/Form/NewForm';

const initialValue = {
  title: '',
  text: '',
  date: new Date(),
  picture: '',
  author: '',
  id: '',
  key: '',
};

export const AddArticle = () => {
  const dispatch = useAppDispatch();

  const addNewArticle = (currentArticles: FormType) => {
    dispatch(addArticleToLocalStorage(currentArticles));
  };

  const submitAdd = (values: FormType) => {
    values.id = String(Math.floor(Math.random() * 100000)) + values.author;
    values.key = values.id;

    addNewArticle(values);
  };

  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };

  return (
    <>
      <NewForm
        actionSubmit={submitAdd}
        actionCancel={goHome}
        typeAction='ADD'
        initialVal={initialValue}
      />
    </>
  );
};
