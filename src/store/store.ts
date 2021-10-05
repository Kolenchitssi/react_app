import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { counterClassicReducerObj } from "../routes/Counters/store/reducer";

import { reducerStarter } from "../routes/Main/modules/store/reducer";

// create Saga============================================
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
//=========================================================

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  if (
    typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function"
  ) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

const rootReducer = combineReducers({
  counterClassicReducerObj,
  reducerStarter,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)) //Saga
);

//======запуск Saga========
sagaMiddleware.run(rootSaga);
