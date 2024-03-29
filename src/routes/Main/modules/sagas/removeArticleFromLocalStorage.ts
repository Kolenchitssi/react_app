import { takeEvery, put, call } from 'redux-saga/effects';
import { removeArticle, REMOVE_ARTICLE_LOCALSTORAGE } from '../store/action';
import { delay } from '../asistansFunction/delay';
import { BaseAction, FormType } from '../../../../store/models';
import { getLocalStorage } from '../asistansFunction/getLocalStorage';
import refreshLocalStorage from '../asistansFunction/refreshLocalStorage1';

// Удаление  артикля из localstorage
export function* workerRemoveArticles(action: BaseAction<string>) {
  yield delay(500);
  let success = false;
  const currentLocalStorage: FormType[] = yield getLocalStorage();
  // ошибка для удаления артикля с индексом 1
  if (action.payload !== '1') {
    const newLocalStorage: FormType[] = currentLocalStorage.filter(
      item => item.id !== action.payload
    );
    success = true;
    if (success) {
      yield call(refreshLocalStorage, newLocalStorage);
      yield delay(500);
      yield put(removeArticle(action.payload));
    }
  } else {
    yield alert('Errror');
  }
}

export function* watchClickRemoveSaga() {
  yield takeEvery(REMOVE_ARTICLE_LOCALSTORAGE, workerRemoveArticles);
}
