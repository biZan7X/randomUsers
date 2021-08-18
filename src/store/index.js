import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from '../reducers';
import middlewares from '../sagas';

const sagaMiddlewares = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddlewares)),
);

sagaMiddlewares.run(middlewares);
