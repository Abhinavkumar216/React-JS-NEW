import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ReducerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
