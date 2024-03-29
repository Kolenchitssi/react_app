import { put, takeEvery } from '@redux-saga/core/effects';
import { FormType } from '../../../../store/models';
import { delay } from '../asistansFunction/delay';
import { getLocalStorage } from '../asistansFunction/getLocalStorage';
import { GET_ARTICLE, setArticleToState } from '../store/action';

function* workerGetArticles() {
  yield delay(1000);
  const newStore: FormType[] = yield getLocalStorage();
  yield put(setArticleToState(newStore));
}

export function* watchGetArticles() {
  yield takeEvery(GET_ARTICLE, workerGetArticles);
}
