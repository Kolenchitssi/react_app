import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { FormType } from "../../store/models";
import style from "./Form.module.scss";

import { DateForm } from "../DateForm/DateForm";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { successConnected } from "../../routes/Main/components/store/action";
import { useEffect } from "react";

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
  const goHome = actionCancel;

  const successEdit = useAppSelector(
    (store) => store.connectedReducer.editSuccess
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("смотрим  за successEdit", successEdit);
    if (successEdit) {
      goHome();
      dispatch(successConnected(false));
    }
  }, [successEdit]);

  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    actionSubmit(values);
    setSubmitting(false);
    console.log("successEdit", successEdit);

    // if (successEdit) {
    //   goHome();
    // }
  };

  return (
    <Formik
      initialValues={initialVal}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({ handleReset, isSubmitting }) => (
        <Form className={style.form}>
          <div>
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
          </div>
          <div>
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
          </div>

          <div>
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
          </div>

          {/* <div>
            <label htmlFor={style.date}> date : </label>
            <Field type="date" name="date" id={style.date} />
            <span className={style.errors}>
              <ErrorMessage name="date" />
            </span>
          </div> */}

          <div>
            <label htmlFor={style.date}> date : </label>
            <DateForm name="date" id={style.date} />
            <span className={style.errors}>
              <ErrorMessage name="date" />
            </span>
          </div>

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
