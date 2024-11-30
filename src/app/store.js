import { configureStore } from "@reduxjs/toolkit";
import empReducer from "./EmpSlice";

export const store = configureStore({
  reducer: {
    emp: empReducer,
  },
});
