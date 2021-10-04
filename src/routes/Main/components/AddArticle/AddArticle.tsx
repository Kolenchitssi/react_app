import { useHistory } from "react-router";
import { useAppDispatch } from "../../../../store/hook";
import { FormType } from "../../../../store/models";
import { addArticle } from "../../modules/store/action";
// import { PropsArticle } from "../Article/Article";
import { NewForm } from "../../../../components/Form/NewForm";

const initialValue = {
  title: "",
  text: "",
  date: new Date(),
  author: "",
  id: "",
  key: "",
};

export const AddArticle = () => {
  const dispatch = useAppDispatch();

  const addNewArticle = (currentArticles: FormType) => {
    dispatch(addArticle(currentArticles));
  };

  const submitAdd = (
    values: FormType
    // { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    values.id = String(Math.floor(Math.random() * 100000)) + values.author;
    values.key = values.id;

    addNewArticle(values);
    // setSubmitting(false);
  };

  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <>
      <NewForm
        actionSubmit={submitAdd}
        actionCancel={goHome}
        typeAction="ADD"
        initialVal={initialValue}
      />
    </>
  );
};
