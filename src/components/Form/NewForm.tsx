import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { FormType } from "../../store/models";
import style from "./Form.module.scss";

type PropsArticleForm = {
  // [key: string]: any;
  actionSubmit: (value: FormType) => void;
  actionCancel: () => void;
  typeAction: "ADD" | "EDIT";
  initialVal: FormType;
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

export function NewForm({
  typeAction,
  actionSubmit,
  actionCancel,
  initialVal,
}: PropsArticleForm): JSX.Element {
  // const history = useHistory();
  // const goHome = () => {
  //   history.push("/");
  // };

  const goHome = actionCancel;

  // type TypeArticleId = {
  //   id: string;
  // };

  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    actionSubmit(values);
    setSubmitting(false);
    goHome();
  };

  return (
    <Formik
      initialValues={initialVal}
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
            <span className={style.errors}>
              <ErrorMessage name="text" />
            </span>
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
            <span className={style.errors}>
              <ErrorMessage name="date" />
            </span>
          </p>

          <div className={style.formButton}>
            {typeAction === "ADD" ? (
              <button
                type="submit"
                className="btn btn-success"
                disabled={
                  isSubmitting
                } /*кнопка недоступна когда идет отправка*/
              >
                Add
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success"
                disabled={
                  isSubmitting
                } /*кнопка недоступна когда идет отправка*/
              >
                Save
              </button>
            )}
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
