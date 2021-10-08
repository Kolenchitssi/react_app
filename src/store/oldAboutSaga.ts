import type { RootState, AppDispatch, FormType, BaseAction } from "./models";
//эффекты -вспомогательные функции которые создают простые объекты котрые содержат инструкции
//эти инструкции выполняются самой reduxSagaMiddleware

//take- указывает Middleware ждать выполнения указанного действия
//takeEvery - для каждого срабатывания экшена
//takeLatest -  только для последнего диспатча экшена (автоматически отменяет любую предыдущую задачу саги если она еще выполняется
// если поступил новый отменяет предыдущий (если нажать нескоолько раз)
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
  removeArticle,
  REMOVE_ARTICLE,
  REMOVE_ARTICLE_LOCALSTORAGE,
  SET_ARTICLE_TO_STATE,
} from "../routes/Main/modules/store/action";
import { articlesList } from "../routes/Main/components/Article/articlesList";
import { ActionType } from "@redux-saga/types";
import {
  watchClickRemoveSaga,
  workerRemoveArticles,
} from "../routes/Main/modules/sagas/removeArticleFromLocalStorage";
import { watchClickAddSaga } from "../routes/Main/modules/sagas/addArticleToLocalStorage";
import { watchGetArticles } from "../routes/Main/modules/sagas/getArticleFromLocalStorage";
import { watchClickEditSaga } from "../routes/Main/modules/sagas/EditArticleInLocalStorage";

// const refreshLocalStorage = (store: RootState) =>
//   localStorage.setItem("articles", JSON.stringify(store.reducerStarter));

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

//worker saga которая будет запускатся в зависимости от какого-то экшена
//выполняет бизнес логику(запрос/таймаут/запись в кэш и т.д.)

// export function* workerSaga(action: BaseAction<FormType>) {
//   yield delay(500);
//   const store: RootState = yield select((store) => store);
//   console.log(store);
//   yield console.log("saga отработала по экшену: ADD_ARTICLE or EDIT REMOVE");
// yield delay(500);
// yield put({ type: "ADD_VAL", payload: 100 });
// yield console.log("увеличился счетчик");
//   yield delay(1000);
//   yield refreshLocalStorage(store);
//   yield console.log("обновился LocalStorage", "add :", action.payload);
// }

// const getLocalStorage = () => {
//   if (!localStorage.length && !localStorage.getItem("articles")) {
//     localStorage.setItem("articles", JSON.stringify(articlesList));
//   }
//   const localStorageList = localStorage.getItem("articles") || "";
//   return JSON.parse(localStorageList);
// };

//получение списка артиклей из localstorage
// export function* workerGetArticles() {
//   yield delay(2000);
//   const newStore: FormType[] = getLocalStorage();

//   yield put({ type: SET_ARTICLE_TO_STATE, payload: newStore });
// }

//Удаление  артикля из localstorage
// export function* workerRemoveArticles() {
//   yield delay(1000);
//   const newStore: FormType[] = getLocalStorage();

//   console.log("workerGetArticles - newStore action");

//   yield put({ type: REMOVE_ARTICLE, payload: "id" });
// }

//saga watcher  следят за dispatch'ем action  в приложении и когда происходит
//какойто экшен они выполняют какое-то действие запускают worker

// export function* watchClickEditSaga() {
//   yield takeEvery(EDIT_ARTICLE, workerSaga);
// }

// export function* watchClickAddSaga() {
//   const action: BaseAction<FormType> = yield takeEvery(ADD_ARTICLE, workerSaga);
// }

//cоздает самый верхний процесс запускает watcher-ы

export function* rootSaga() {
  // yield watchClickSaga();
  // yield fork(watchClickSaga); //неблокируемый запуск но задача привязывается к родителю
  // yield spawn(watchClickEditSaga); //создает паралельную задачу в корне саги, сам процесс не привязывается к родителю
  yield fork(watchGetArticles);
  yield fork(watchClickEditSaga);
  yield fork(watchClickAddSaga);
  yield fork(watchClickRemoveSaga);

}
