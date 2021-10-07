import { call, put, takeEvery } from "@redux-saga/core/effects";
import { BaseAction, FormType } from "../../../../store/models";
import { delay } from "../asistansFunction/delay";
import { getLocalStorage } from "../asistansFunction/getLocalStorage";
import refreshLocalStorage from "../asistansFunction/refreshLocalStorage1";
import { editArticle, EDIT_ARTICLE_LOCALSTORAGE } from "../store/action";

export function* watchClickEditSaga() {
  yield takeEvery(EDIT_ARTICLE_LOCALSTORAGE, editArticleWorker);
}

function* editArticleWorker(action: BaseAction<FormType>) {
  yield delay(500);
  yield console.log("start edit");

  const currentLocalStorage: FormType[] = yield getLocalStorage();
  const editLocalStorage = currentLocalStorage.map((item) => {
    if (item.id === action.payload.id) {
      return action.payload;
    } else {
      return item;
    }
  });

  if (action.payload.title !== "ded") {
    yield call(refreshLocalStorage, editLocalStorage);

    yield delay(2000);
    yield put(editArticle(action.payload));
  } else {
    alert("ERROR: STOP DED");
  }
}
