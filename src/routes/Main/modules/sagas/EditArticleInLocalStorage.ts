import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { Redirect, useHistory } from 'react-router';
import { push } from 'connected-react-router';
import { BaseAction, FormType, RootState } from '../../../../store/models';
import { successConnected } from '../store/actionConnected';
import { delay } from '../asistansFunction/delay';
import { getLocalStorage } from '../asistansFunction/getLocalStorage';
import refreshLocalStorage from '../asistansFunction/refreshLocalStorage1';
import { editArticle, EDIT_ARTICLE_LOCALSTORAGE } from '../store/action';

function* editArticleWorker(action: BaseAction<FormType>) {
  yield delay(500);

  const currentLocalStorage: FormType[] = yield getLocalStorage();
  const editLocalStorage = currentLocalStorage.map(item => {
    if (item.id === action.payload.id) {
      return action.payload;
    }
    return item;
  });

  if (action.payload.title !== 'ded') {
    yield call(refreshLocalStorage, editLocalStorage);
    yield put(editArticle(action.payload));
    yield put(successConnected(true));
    yield put(push('/')); //  use push to redirect to desired location
  } else {
    yield put(successConnected(false));
    alert('ERROR: STOP DED');
  }

  const editResult: RootState = yield select(
    store => store.connectedReducer.editSuccess
  );
}

export function* watchClickEditSaga() {
  yield takeEvery(EDIT_ARTICLE_LOCALSTORAGE, editArticleWorker);
}
