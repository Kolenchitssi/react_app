import { Formik } from "formik";
import { useHistory, useParams } from "react-router";

import { useAppDispatch } from "../../store/hook";
import { addArticle } from "../../routes/Main/modules/store/action";
import { PropsArticle } from "../../routes/Main/components/Article/Article";
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

const formValidation = (values: FormType) => {
  // const errors = {};
  //else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
  // return errors;
  type error = {
    title?: string;
    text?: string;
    date?: string;
    author?: string;
  };
  const errors: error = {};
  if (!values.title) {
    errors.title = "Required Title";
    // values.title = "Required Title";
  }
  if (values.title.length > 20) {
    errors.title = " Length title is no more than 20 characters ";
    // values.title = "Required Title";
  }
  if (!values.text) {
    errors.text = "Required text";
  }
  if (values.text.length < 5) {
    errors.text = " Length text is at least 5 characters ";
    // values.title = "Required Title";
  }
  if (!values.date) {
    errors.date = "Required date";
  }

  if (!values.author) {
    errors.author = "Required author";
  }
  if (values.author.length < 2) {
    errors.author = " Length name author is at least 2 characters ";
    // values.title = "Required Title";
  }
  return errors;
};

type PropsArticleForm = {
  [key: string]: any;
};

export function MyForm(props: PropsArticleForm): JSX.Element {
  const history = useHistory();

  const articleId = useParams();
  console.log("articleId", articleId);

  const goHome = () => {
    history.push("/");
  };

  //function submit
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values));
    //   setSubmitting(false);
    // }, 400);
    addNewArticle(values);
    console.log(values);
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
      initialValues={{
        title: "addTitle",
        text: "addText",
        date: String(new Date()),
        author: "addAuthor",

        get id() {
          return String(Math.floor(Math.random() * 100000));
        },

        get key() {
          return this.id + this.author + this.date;
        },
      }}
      validate={formValidation}
      onSubmit={submit}
    >
      {({
        values, //значения
        errors, //ошибки
        touched, // показывает взаимодействовали ли мы с полем ранее
        handleChange, // вызывается каждый раз когда мы меняем значение
        handleBlur, // вызывается при уходе с поля
        handleSubmit, //вызывается при отправке формы
        handleReset,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className={style.form}>
          <p>
            <label htmlFor={style.title}> title : </label>
            <input
              type="title"
              name="title"
              id={style.title}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <span className={style.errors}>
              {errors.title && touched.title && errors.title}{" "}
            </span>
          </p>
          <p>
            <label htmlFor={style.textArea}> text : </label>
            <textarea
              name="text"
              className={style.textArea}
              id={style.textArea}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
            />
            <p className={style.errors}>
              {errors.text && touched.text && errors.text}
            </p>
          </p>

          <p>
            <label htmlFor={style.author}> author : </label>
            <input
              type="author"
              name="author"
              id={style.author}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />

            {/* {errors.author ? <div className="style.errors"> Ошибка</div> : null} */}

            <span className={style.errors}>
              {errors.author && touched.author && errors.author}
            </span>
          </p>

          <p>
            <label htmlFor={style.date}> date : </label>
            <input
              type="date"
              name="date"
              id={style.date}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
          </p>

          {/* <Field
              id="firstName"
              name="firstName"
              placeholder="Field First Name"
            /> */}
          <div className={style.formButton}>
            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting} /*кнопка недоступна когда идет отправка*/
            >
              Save
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
        </form>
      )}
    </Formik>
  );
}
