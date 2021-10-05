import type { RootState, AppDispatch } from "./models";
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

//worker saga которая будет запускатся в зависимости от какого-то экшена
//выполняет бизнес логику(запрос/таймаут/запись в кэш и т.д.)

export function* workerSaga() {
  const store: RootState = yield select((store) => store);
  console.log(store);
  console.log("saga отработала по экшену: ADD_ARTICLE");
  yield put({ type: "ADD_VAL", payload: 100 });
}

//saga watcher  следят за dispatch'ем action  в приложении и когда происходит
//какойто экшен они выполняют какое-то действие запускают worker

export function* watchClickSaga() {
  // while (true) {
  //   //чтобы срабатывало не 1 раз а каждый раз
  //   yield take("ADD_ARTICLE"); //ждет выполнения диспатча этого экшена
  //   yield workerSaga(); //и вызывает worker
  // }
  //вместо использования цикла while(true)
  yield takeEvery("ADD_ARTICLE", workerSaga);
}

//cоздает самый верхний процесс запускает watcher

export function* rootSaga() {
  // yield watchClickSaga();
  // yield fork(watchClickSaga); //неблокируемый запуск но задача привязывается к родителю
  yield spawn(watchClickSaga); //создает паралельную задачу в корне саги, сам процесс не привязывается к родителю
}
