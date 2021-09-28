import styles from "./Article.module.scss";
import Button from "../../../../components/Button/Button";
import { useHistory } from "react-router";
import { useAppSelector } from "../../../../store/hook";

export type PropsArticle = {
  id: string;
  key: string;
  title: string;
  text: string;
  date: string;
  author: string;
};

function Article(props: PropsArticle): JSX.Element {
  //button Delete забрать список всех статей и по id  найти и удалить из массива
  const allArticle = useAppSelector((state) => state.reducerStarter);

  const deleteArticle = (e: any) => {
    console.log(e);
  };

  const history = useHistory();
  return (
    <article className={styles.article}>
      <a href={`/article/${props.id}`} className={styles.titleArticle}>
        <h4>{props.title}</h4>
      </a>
      <div className={styles.articleText}>
        <textarea
          className={styles.textArea}
          name={props.title}
          id={props.id}
          defaultValue={props.text}
          readOnly
        ></textarea>
        <Button
          typeButton="secondary"
          textButton="Edit"
          onClick={() => {
            history.push(`/article/${props.id}`);
          }}
        />
        <Button
          typeButton="danger"
          textButton="Delete"
          onClick={() => {
            deleteArticle(props.id);
          }}
        />
      </div>
      <div className={styles.author}>
        <p>{props.date}</p>
        <p>
          {"\u00A0"} | {"\u00A0"}
        </p>
        <p>{props.author}</p>
      </div>
    </article>
  );
}

export default Article;
