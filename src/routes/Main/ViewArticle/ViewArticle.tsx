import { useHistory, useParams } from 'react-router';
import Button from '../../../components/Button/Button';
import { useAppSelector } from '../../../store/hook';
import style from './ViewArticle.module.scss';

export function ViewArticle(): JSX.Element {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  type TypeArticleId = {
    id: string;
  };

  const articleId: TypeArticleId = useParams();
  const resultId = articleId.id;
  const article = useAppSelector(state => state.reducerStarter).find(
    item => item.id === resultId
  );

  return (
    <div className={style.wrapper}>
      <h2>{article?.title}</h2>
      <div className={style.textWrapper}>
        {' '}
        <p>{article?.text}</p>{' '}
        <img
          style={{ maxWidth: '320px', maxHeight: '320px' }}
          src={article?.picture64base}
          alt=''
        />
      </div>

      <div>
        {' '}
        <p>Author: {article?.author}</p>
        <p>Date:{String(article?.date)}</p>
      </div>

      <div className={style.buttonWrapper}>
        <Button
          typeButton='secondary'
          textButton='Edit'
          onClick={() => {
            history.push(`/article/${resultId}/edit`);
          }}
        />
        <Button
          typeButton='danger'
          textButton='Close'
          onClick={() => goHome()}
        />
      </div>
    </div>
  );
}
