import { useHistory, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { FormType } from "../../../../store/models";
import { editArticle } from "../../modules/store/action";
import { PropsArticle } from "../Article/Article";
import { NewForm } from "../../../../components/Form/NewForm";

export const EditArticle = () => {
  const dispatch = useAppDispatch();

  const saveExistArticle = (currentArticles: PropsArticle) => {
    dispatch(editArticle(currentArticles));
  };

  const submitEdit = (
    values: FormType
    // { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    saveExistArticle(values);
    // setSubmitting(false);
  };

  type TypeArticleId = {
    id: string;
  };

  const articleId: TypeArticleId = useParams();
  const resultId = articleId.id;
  const allArticle = useAppSelector((state) => state.reducerStarter);

  const indexArticleOfArray = allArticle.findIndex(
    (item) => item.id === resultId
  );

  const initialValue: FormType = allArticle[indexArticleOfArray];

  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <>
      <NewForm
        actionSubmit={submitEdit}
        typeAction="EDIT"
        actionCancel={goHome}
        initialVal={initialValue}
      />
    </>
  );
};
