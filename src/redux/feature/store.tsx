import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import { baseApi } from "../api/api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(baseApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
