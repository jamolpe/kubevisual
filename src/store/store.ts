import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import podReducer from './reducers/pod/pod-reducer';
import statusReducer from './reducers/status/status-reducer';

export const store = configureStore({
  reducer: {
    pod: podReducer,
    status: statusReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
