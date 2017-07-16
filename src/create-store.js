import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const middleware = [thunk];

export default function() {
  const store = createStore(
    reducers,
    undefined,
    applyMiddleware(...middleware)
  );

  return store;
}
