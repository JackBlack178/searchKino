import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootReducer } from "@utils/rootReducer.ts";
import { movieSchema } from "./schemas.ts";

const api_key = import.meta.env.VITE_API_KEY;

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", api_key);
    },
  }),
  tagTypes: ["movies"],
  endpoints: (builder) => ({
    getMovie: builder.query<any, string>({
      query: (id) => `/v1.4/movie/${id}`,
      transformResponse: (response) => {
        console.log(response);
        return movieSchema.parse(response);
      },
    }),
  }),
});

rootReducer.inject(movieApi);
