import type { RootState, AppDispatch, FormType } from "./models";
//эффекты -вспомогательные функции которые создают простые объекты котрые содержат инструкции
//эти инструкции выполняются самой reduxSagaMiddleware

//take- указывает Middleware ждать выполнения указанного действия
//takeEvery - для каждого срабатывания экшена
//takeLatest -  только для последнего диспатча экшена если поступил новый отменяет предыдущий (если нажать нескоолько раз)
//takeLeading - только для первого
//put - отправить действие в стор, тоесть задиспатчить экшен
//call -останавливает выполнение sagи пока не зарезолвится промис котрый мы ему передали и возвращает простой объект
// это что-то типа await;
//fork - указывает выполнить неблокирующий вызов функции(то есть 2и более функции выполняются паралельно асинхронно)
//spawn - тоже не блокирующая задача но еслив предыдущем процессе ошибка последующий процесс все равно выполняется
//join - подождать выполнения задачи (загрузки и только тогда получит)
//select -получить наш Store
import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  fork,
  spawn,
  join,
  select,
} from "redux-saga/effects";
import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLE,
  REMOVE_ARTICLE,
  SET_ARTICLE_TO_STATE,
} from "../routes/Main/modules/store/action";
import { articlesList } from "../routes/Main/components/Article/articlesList";

const refreshLocalStorage = (store: RootState) =>
  localStorage.setItem("articles", JSON.stringify(store.reducerStarter));

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

//worker saga которая будет запускатся в зависимости от какого-то экшена
//выполняет бизнес логику(запрос/таймаут/запись в кэш и т.д.)

export function* workerSaga() {
  yield delay(500);
  const store: RootState = yield select((store) => store);
  console.log(store);
  yield console.log("saga отработала по экшену: ADD_ARTICLE or EDIT REMOVE");
  // yield delay(500);
  // yield put({ type: "ADD_VAL", payload: 100 });
  // yield console.log("увеличился счетчик");
  yield delay(1000);
  yield refreshLocalStorage(store);
  yield console.log("обновился LocalStorage");
}

const getLocalStorage = () => {
  if (!localStorage.length && !localStorage.getItem("articles")) {
    localStorage.setItem("articles", JSON.stringify(articlesList));
  }
  const localStorageList = localStorage.getItem("articles") || "";
  return JSON.parse(localStorageList);
};

export function* workerGetArticles() {
  yield delay(2000);
  const newStore: FormType[] = getLocalStorage();
  console.log("workerGetArticles - newStore", newStore);

  yield put({ type: SET_ARTICLE_TO_STATE, payload: newStore });
}

//saga watcher  следят за dispatch'ем action  в приложении и когда происходит
//какойто экшен они выполняют какое-то действие запускают worker

export function* watchClickEditSaga() {
  yield takeEvery(EDIT_ARTICLE, workerSaga);
}

export function* watchClickAddSaga() {
  yield takeEvery(ADD_ARTICLE, workerSaga);
}

export function* watchClickRemoveSaga() {
  yield takeEvery(REMOVE_ARTICLE, workerSaga);
}

export function* watchGetArticles() {
  yield takeEvery(GET_ARTICLE, workerGetArticles);
}

//cоздает самый верхний процесс запускает watcher-ы

export function* rootSaga() {
  // yield watchClickSaga();
  // yield fork(watchClickSaga); //неблокируемый запуск но задача привязывается к родителю
  // yield spawn(watchClickEditSaga); //создает паралельную задачу в корне саги, сам процесс не привязывается к родителю
  yield spawn(watchClickEditSaga);
  yield spawn(watchClickAddSaga);
  yield spawn(watchClickRemoveSaga);
  yield spawn(watchGetArticles);

  // yield watchClickEditSaga();
  // yield watchClickAddSaga();
  // yield watchClickRemoveSaga();
  // yield watchGetArticles();
}
