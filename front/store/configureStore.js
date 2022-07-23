import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import reducer from 'reducers';

const isDev = process.env.NODE_ENV === 'development';
const createStore = () => {
  const middleware = (getDefaultMiddleware) =>
    isDev ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();
  const store = configureStore({
    reducer,
    middleware,
    devTools: isDev,
  });
  return store;
};
const wrapper = createWrapper(createStore, {
  debug: isDev,
});

export default wrapper;
