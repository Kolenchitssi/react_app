import styles from "./Article.module.scss";
import Button from "../../../../components/Button/Button";

type propsArticle = {
  id: string;
  key: string;
  title: string;
  text: string;
  date: string;
  author: string;
};

function Article(props: propsArticle): JSX.Element {
  return (
    <article className={styles.article}>
      <a href={`/article/${props.id}`}>
        {" "}
        <h4>{props.title}</h4>{" "}
      </a>
      <div className={styles.articleText}>
        <textarea
          className={styles.textArea}
          name={props.title}
          id={props.id}
          defaultValue={props.text}
        ></textarea>
        <Button typeButton="secondary" textButton="Edit" />
        <Button typeButton="secondary" textButton="Delete" />
      </div>
    </article>
  );
}

export default Article;
