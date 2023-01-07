import { configureStore } from "@reduxjs/toolkit";
import fetchedDataSlice from "./slicers/fetchedDataSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchedDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
