import { connect } from "react-redux";
import { NewForm } from "../../../../components/Form/NewForm";
import { FormType, RootState } from "../../../../store/models";
import { editArticle } from "../../modules/store/action";

type ownProps = {
  actionSubmit: (value: FormType) => void;
  actionCancel: () => void;
  typeAction: "ADD" | "EDIT";
  IdProps: string;
};

const mapStateToProps = (
  state: RootState,
  { IdProps, actionSubmit, typeAction, actionCancel }: ownProps
) => {
  const indexArticleOfArray = state.reducerStarter.findIndex(
    (item) => item.id === IdProps
  );

  const initialValue: FormType = state.reducerStarter[indexArticleOfArray];

  return {
    actionSubmit: actionSubmit,
    typeAction: typeAction,
    actionCancel: actionCancel,
    initialVal: initialValue,
  };
};

const mapDispatchToProps = {
  editArticle,
};

// const mapDispatchToProps2 = (dispatch: AppDispatch) => {
//   return {
//     editArticle: (currentArticles: FormType) => {
//       dispatch(editArticle(currentArticles));
//     },
//   };
// };

export const ConnectedNewForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewForm);
