//todo сделать отдельно кнопки add для добавления save для редактирования и функция save должна сохранять в том же месте массива изменненный Article

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useHistory, useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { addArticle } from "../../modules/store/action";
import { PropsArticle } from "../Article/Article";
import style from "./Form.module.scss";

type FormType = {
  // [key: string]: any;
  title: string;
  text: string;
  date: string;
  author: string;
  id: string;
  key: string;
};

type PropsArticleForm = {
  [key: string]: any;
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Required Title")
    .max(20, " Length title is no more than 20 characters "),
  text: Yup.string()
    .required("Required text")
    .min(5, "Length text is at least 5 characters"),
  date: Yup.string().required("Required date"),
  author: Yup.string()
    .required("Required author")
    .min(2, "Length name author is at least 2 characters "),
});

export function NewForm({ typeAction }: PropsArticleForm): JSX.Element {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  // { articleObj }: PropsArticleForm
  type TypeArticleId = {
    id: string;
  };

  const articleId: TypeArticleId = useParams();
  const resultId = articleId.id;
  const allArticle = useAppSelector((state) => state.reducerStarter);

  const indexArticleOfArray = allArticle.findIndex(
    (item) => item.id === resultId
  );

  // console.log("new", allArticle[indexArticleOfArray]);

  let initialValues = {
    title: "",
    text: "",
    date: "",
    author: "",
    id: "",
    key: "",
  };

  switch (typeAction) {
    case "ADD":
      console.log("ADD");
      break;

    case "EDIT":
      initialValues = allArticle[indexArticleOfArray];
      break;

    default:
      break;
  }

  //function submit
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values));
    //   setSubmitting(false);
    // }, 400);
    values.id = String(Math.floor(Math.random() * 100000)) + values.author;
    values.key = values.id + values.author + values.date;
    addNewArticle(values);
    setSubmitting(false);
    goHome();
  };

  const dispatch = useAppDispatch();
  const addNewArticle = (currentArticles: PropsArticle) => {
    dispatch(addArticle(currentArticles));
  };

  //======================================

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({ handleReset, isSubmitting }) => (
        <Form className={style.form}>
          <p>
            <label htmlFor={style.title}> title : </label>
            <Field
              type="title"
              name="title"
              id={style.title}
              placeholder="Add title"
            />

            <span className={style.errors}>
              <ErrorMessage name="title" />
            </span>
          </p>
          <p>
            <label htmlFor={style.textArea}> text : </label>
            <Field
              as="textarea"
              name="text"
              className={style.textArea}
              id={style.textArea}
              placeholder="Add your text"
            />
            <p className={style.errors}>
              <ErrorMessage name="text" />
            </p>
          </p>

          <p>
            <label htmlFor={style.author}> author : </label>
            <Field
              type="author"
              name="author"
              id={style.author}
              placeholder="Add author"
            />

            <span className={style.errors}>
              <ErrorMessage name="author" component="span" />
            </span>
          </p>

          <p>
            <label htmlFor={style.date}> date : </label>
            <Field type="date" name="date" id={style.date} />
            <span>
              <ErrorMessage name="date" />
            </span>
          </p>

          <div className={style.formButton}>
            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting} /*кнопка недоступна когда идет отправка*/
            >
              Save/Add
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => goHome()}
              disabled={isSubmitting} /*кнопка недоступна когда идет отправка*/
            >
              Cancel
            </button>

            <button
              type="reset"
              className="btn btn-warning"
              onClick={() => handleReset()}
              disabled={isSubmitting}
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
