import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { counterClassicReducerObj } from "../routes/Counters/store/reducer";

import { reducerStarter } from "../routes/Main/modules/store/reducer";
import { starWarReducer } from "../routes/StarWars/store/reducer";
import { connectedReducer } from "../routes/Main/components/store/reducer";

// create Saga============================================
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

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

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  connectRouter: connectRouter(history),
  counterClassicReducerObj,
  reducerStarter,
  starWarReducer,
  connectedReducer,
});

//тут экспорт функции ппо другому немного
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)) //Saga
);

//======запуск Saga========
sagaMiddleware.run(rootSaga);
