import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import Button from "../../../../components/Button/Button";
import { useAppDispatch } from "../../../../store/hook";
import { FormType } from "../../../../store/models";
import {
  removeArticle,
  removeArticleLocalStorage,
} from "../../modules/store/action";
import styles from "./Article.module.scss";

// export type PropsArticle = {
//   id: string;
//   key: string;
//   title: string;
//   text: string;
//   date: Date;
//   author: string;
// };

function Article(props: FormType): JSX.Element {
  //button Delete забрать список всех статей и по id  найти и удалить из массива

  // const deleteArticle = (e: any) => {
  //   console.log(e);
  // };

  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <article className={styles.article}>
      <Link to={`/article/${props.id}/view`} className="nav-link">
        <h4>{props.title}</h4>
      </Link>
      <div className={styles.articleText}>
        <p className={styles.textArea}>
          {props.text}
          {props.picture64base !== undefined ? (
            <img
              style={{ maxWidth: "80px", maxHeight: "80px" }}
              src={props.picture64base}
              alt=""
            />
          ) : (
            <span></span>
          )}
        </p>

        <Button
          typeButton="secondary"
          textButton="Edit"
          onClick={() => {
            history.push(`/article/${props.id}/edit`);
          }}
        />
        <Button
          typeButton="danger"
          textButton="Delete"
          onClick={() => {
            // console.log(props.id);

            dispatch(removeArticleLocalStorage(props.id));
          }}
        />
      </div>
      <div className={styles.author}>
        <p>{String(props.date)}</p>
        <p>
          {"\u00A0"} | {"\u00A0"}
        </p>
        <p>{props.author}</p>
      </div>
    </article>
  );
}

export default Article;
