import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@utils/rootReducer.ts";
import { movieApi } from "@models/movie/movieAPI.ts";

export const store = configureStore({
  reducer: rootReducer,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
