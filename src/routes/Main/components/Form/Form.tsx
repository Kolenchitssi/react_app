import style from "./Form.module.scss";
import { Field, Formik } from "formik";

import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { PropsArticle } from "../Article/Article";
import { addArticle } from "../../modules/store/action";

type FormType = {
  // [key: string]: any;
  title: string;
  text: string;
  date: string;
  author: string;
};

const formValidation = (values: FormType) => {
  const errors = {};
  return errors;
  // const errors = { email: "" };
  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // } else return {};
  // return errors;
};

export function MyForm(): JSX.Element {
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 400);
  };

  //!================завтра посмотреть */
  const articlesAll = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  // const addNewArticle = (currentArticles: PropsArticle[]) => {
  //
  //   const newArticle: PropsArticle = {
  //     title: "addTitle",
  //     text: "addText",
  //     date: String(new Date()),
  //     author: "addAuthor",

  //     get id() {
  //       return String(Math.floor(Math.random() * 100000));
  //     },

  //     get key() {
  //       return this.id + this.author + this.date;
  //     },
  //   };

  //   dispatch(addArticle(newArticle));
  // };

  //======================================

  return (
    <>
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
              />{" "}
              {/* <span className={style.errors}>
                {errors.email && touched.email && errors.email}{" "}
              </span> */}
            </p>
            <p>
              <label htmlFor={style.textArea}> text : </label>
              <textarea
                name="textArea"
                className={style.textArea}
                id={style.textArea}
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.text}
              />
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

            <Field
              id="firstName"
              name="firstName"
              placeholder="Field First Name"
            />

            <button
              type="submit"
              className="btn btn-secondary"
              disabled={isSubmitting} /*кнопка недоступна когда идет отправка*/
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
