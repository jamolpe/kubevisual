import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './reducers/auth/auth-reducer';
import statusReducer from './reducers/status/status-reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    status: statusReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
