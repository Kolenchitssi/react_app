import styles from './Article.module.scss';
import Button from '../Button/Button';


type propsArticle = {
  articleID: string,
  titleArticle: string,
  articleText: string,
}

function Article(props: propsArticle): JSX.Element {
  const articleLink = `/article/${props.articleID}`;

  return (
    <article className={styles.article}>
      <a href={articleLink}> <h4>{props.titleArticle}</h4> </a>
      <div className={styles.articleText}>
        <textarea className={styles.textArea} name={props.titleArticle} id={props.articleID}>
          {props.articleText}
        </textarea>
        <Button typeButton="secondary" textButton="Edit" />
        <Button typeButton="secondary" textButton="Delete" />
      </div>
    </article>
  );
}

export default Article;
