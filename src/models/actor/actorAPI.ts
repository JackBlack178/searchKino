import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootReducer } from "@utils/rootReducer.ts";
import { actorSchema } from "@models/actor/schemas.ts";

const api_key = import.meta.env.VITE_API_KEY;

export const actorAPI = createApi({
  reducerPath: "actor",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", api_key);
    },
  }),
  tagTypes: ["actor"],
  endpoints: (builder) => ({
    getActor: builder.query<any, string>({
      query: (id) => `/v1.4/person/${id}`,
      transformResponse: (response) => {
        return actorSchema.parse(response);
      },
    }),
  }),
});

rootReducer.inject(actorAPI);
