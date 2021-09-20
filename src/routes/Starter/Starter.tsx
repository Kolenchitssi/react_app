import {addArticle, removeArticle, editArticle} from './store/action';
import {useAppDispatch, useAppSelector} from '../../store/hook';

function Starter():JSX.Element {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(state=>state.reducerStarter.articles);
  return (
    <div>
      <p>Starter</p>
      {articles}
      


    </div>
  )

}

export default Starter;
