/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import homeSaga from './containers/HomePage/saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const enhancers = [
  applyMiddleware(...middlewares),
  responsiveStoreEnhancer,
];

const sagas = [
  homeSaga,
];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
      // Prevent recomputing reducers for `replaceReducer`
      shouldHotReload: false,
    })
    : compose;
/* eslint-enable */

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  store.sagaTasks = sagas.map(sagaMiddleware.run);
  return store;
}

