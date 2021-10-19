/* eslint-disable react/button-has-type */
import 'react-datepicker/dist/react-datepicker.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';

import { useAppSelector } from '../../store/hook';
import { FormType } from '../../store/models';
import style from './Form.module.scss';

type PropsArticleForm = {  
  actionSubmit: (value: FormType) => void;
  actionCancel: () => void;
  typeAction: 'ADD' | 'EDIT';
  initialVal: FormType;
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Required Title')
    .max(20, ' Length title is no more than 20 characters '),
  text: Yup.string()
    .required('Required text')
    .min(5, 'Length text is at least 5 characters'),
  date: Yup.string().required('Required date'),
  author: Yup.string()
    .required('Required author')
    .min(2, 'Length name author is at least 2 characters '),
});

export function NewForm({
  typeAction,
  actionSubmit,
  actionCancel,
  initialVal,
}: PropsArticleForm): JSX.Element {
  const goHome = actionCancel;

  const successEdit = useAppSelector(
    (store) => store.connectedReducer.editSuccess,
  );
  let { picture64base } = initialVal;

  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void },
  ) => {
    const editValues=values
    editValues.picture64base = picture64base;
    actionSubmit(values);    
    setSubmitting(false);
    
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Formik
      initialValues={initialVal}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({
        values, handleChange, handleBlur, handleReset, isSubmitting,
      }) => (
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
            <p>
              <img
                style={{ maxWidth: '320px', maxHeight: '320px' }}
                src={values.picture64base}
                alt=""
              />
            </p>
            <span className={style.errors}>
              <ErrorMessage name="text" />
            </span>
          </div>

          <div className={style.inputWrapper}>
            <div>
              <label htmlFor={style.picture}> add picture : </label>
              <input
                id="picture"
                name="picture"
                type="file"
                className={style.input}
                onChange={(event) => {
                  const { files } = event.target;
                  const reader = new FileReader();
                  if (files) {
                    reader.readAsDataURL(files[0]);
                    reader.onload = (e) => {
                      // console.log(e.target?.result);
                      if (e.target?.result) {
                        picture64base = String(e.target?.result);
                        // values.picture64base = String(e.target?.result);                        
                      }
                    };
                    // console.log(
                    //   'event',
                    //   event,
                    //   'values',
                    //   values,
                    //   'files',
                    //   files,
                    // );
                    handleChange(event);
                  }
                }}
                onBlur={handleBlur}
              />

              {/* <Field
              type="file"
              name="picture"
              id={style.picture}
              placeholder="Add picture"
            /> */}

              <span className={style.errors}>
                <ErrorMessage name="author" component="span" />
              </span>
            </div>

            <div>
              <label htmlFor={style.author}> author : </label>

              <Field
                type="author"
                name="author"
                className={style.input}
                id={style.author}
                placeholder="Add author"
              />

              <span className={style.errors}>
                <ErrorMessage name="author" component="span" />
              </span>
            </div>

            {/* <div>
              <label htmlFor={style.date}> date : </label>

              <Field
                type="date"
                name="date"
                className={style.input}
                id={style.date}
                value={values.date}
              />
              <span className={style.errors}>
                <ErrorMessage name="date" />
              </span>
            </div> */}

            <div>
              <label htmlFor={style.date}> date : </label>

              <Field
                as={DatePicker}
                id={style.date}
                selected={selectedDate}
                onChange={(date: Date) => {
                  setSelectedDate(date);
                  const editValues =values
                  editValues.date = date;
                }}
                name="date"
                value={values.date}
                dateFormat="dd/MM/yyyy"
                minDate={new Date(2021, 8, 1)}
                maxDate={new Date()}
              />
              <span className={style.errors}>
                <ErrorMessage name="date" />
              </span>
            </div>
          </div>

          <div className={style.formButton}>
            {typeAction === 'ADD' ? (
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                Add
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                Save
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => goHome()}
              disabled={isSubmitting}
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
