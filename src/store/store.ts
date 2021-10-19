import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { counterClassicReducerObj } from '../routes/Counters/store/reducer';
import { connectedReducer } from '../routes/Main/components/store/reducer';
import { reducerStarter } from '../routes/Main/modules/store/reducer';
import { starWarReducer } from '../routes/StarWars/store/reducer';
import { rootSaga } from './rootSaga';

// create Saga============================================
const sagaMiddleware = createSagaMiddleware();
// =========================================================

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  if (
    typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function"
  ) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

export const history = createBrowserHistory();

const rootReducer = (historyRouter: History) =>
  combineReducers({
    router: connectRouter(historyRouter), // обязательно имя ключа router
    counterClassicReducerObj,
    reducerStarter,
    starWarReducer,
    connectedReducer,
  });

export const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))) // Saga
);

// ======запуск Saga========
sagaMiddleware.run(rootSaga);
