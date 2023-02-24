import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/movie/reducers';
import createSagaMiddleware from "@redux-saga/core";
import movieSagas from './features/movie/sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movie:movieReducer
  },
  middleware:[sagaMiddleWare]
})
sagaMiddleWare.run(movieSagas)

export default store;