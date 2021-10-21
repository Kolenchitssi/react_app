import { call, put, takeEvery } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';
import { BaseAction, FormType } from '../../../../store/models';
import { delay } from '../asistansFunction/delay';
import { getLocalStorage } from '../asistansFunction/getLocalStorage';
import refreshLocalStorage from '../asistansFunction/refreshLocalStorage1';
import { addArticle, ADD_ARTICLE_LOCALSTORAGE } from '../store/action';

function* addArticleWorker(action: BaseAction<FormType>) {
  yield delay(500);
  const pictureWay = action.payload.picture;

  const currentLocalStorage: FormType[] = yield getLocalStorage();

  currentLocalStorage.push(action.payload);
  if (action.payload.title !== 'ded') {
    yield call(refreshLocalStorage, currentLocalStorage);
    yield delay(2000);
    yield put(addArticle(action.payload));
    yield put(push('/')); //  use push to redirect to desired location
  } else {
    alert('ERROR: STOP DED');
  }
}

export function* watchClickAddSaga() {
  yield takeEvery(ADD_ARTICLE_LOCALSTORAGE, addArticleWorker);
}
