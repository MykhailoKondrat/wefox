import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from '../api/apiSlice';
import managePostReducer from '../features/ManagePost/managePostSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    managePost:managePostReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
