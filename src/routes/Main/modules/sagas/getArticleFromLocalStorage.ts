import { put } from "@redux-saga/core/effects";
import { FormType } from "../../../../store/models";
import { delay } from "../asistansFunction/delay";
import { getLocalStorage } from "../asistansFunction/getLocalStorage";
import { setArticleToState } from "../store/action";

//получение списка артиклей из localstorage
export function* workerGetArticles() {
  yield delay(2000);
  const newStore: FormType[] = yield getLocalStorage();
  console.log("workerGetArticles - newStore", newStore);
  yield put(setArticleToState(newStore));
}
