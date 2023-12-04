import {
  CombinedState,
  Middleware,
  MiddlewareArray,
  configureStore,
} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import SagaMiddleware from 'redux-saga';
import SagaDate from './saga';

const sagaMiddleware: any = SagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(SagaDate);
export default store;
