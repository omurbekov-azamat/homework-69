import {configureStore} from "@reduxjs/toolkit";
import {serialsReducer} from "../components/SearchInput/searchInputSlice";

export const store = configureStore({
  reducer: {
    serials: serialsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;