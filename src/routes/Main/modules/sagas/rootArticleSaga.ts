import { fork } from "@redux-saga/core/effects";
import { watchClickAddSaga } from "./addArticleToLocalStorage";
import { watchClickEditSaga } from "./EditArticleInLocalStorage";
import { watchGetArticles } from "./getArticleFromLocalStorage";
import { watchClickRemoveSaga } from "./removeArticleFromLocalStorage";

export function* rootArticleSaga() {
  yield fork(watchGetArticles);
  yield fork(watchClickEditSaga);
  yield fork(watchClickAddSaga);
  yield fork(watchClickRemoveSaga);
}
