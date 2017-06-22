import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appReducer from './reducers';

const createAppStore = () => {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }
      )
    : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk)
    // other store enhancers if any
  );

  return createStore(appReducer, enhancer);
};

export default createAppStore;