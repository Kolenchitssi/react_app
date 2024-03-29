import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import { useAppDispatch } from '../../store/hook';
import { FormType } from '../../store/models';
import { removeArticleLocalStorage } from '../Main/modules/store/action';
import styles from './Article.module.scss';

function Article(props: FormType): JSX.Element {
  const { id, title, text, picture64base, author, date } = props;

  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <article className={styles.article}>
      <Link to={`/article/${id}/view`} className='nav-link'>
        <h4>{title}</h4>
      </Link>
      <div className={styles.articleText}>
        <p className={styles.textArea}>
          {text}
          {picture64base !== undefined ? (
            <img
              style={{ maxWidth: '80px', maxHeight: '80px' }}
              src={picture64base}
              alt=''
            />
          ) : (
            <span> </span>
          )}
        </p>

        <Button
          typeButton='secondary'
          textButton='Edit'
          onClick={() => {
            history.push(`/article/${props.id}/edit`);
          }}
        />
        <Button
          typeButton='danger'
          textButton='Delete'
          onClick={() => {
            dispatch(removeArticleLocalStorage(props.id));
          }}
        />
      </div>
      <div className={styles.author}>
        <p>{String(date)}</p>
        <p>
          {'\u00A0'} | {'\u00A0'}
        </p>
        <p>{author}</p>
      </div>
    </article>
  );
}

export default Article;
