import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@utils/rootReducer.ts";

export const store = configureStore({
  reducer: rootReducer,
});
