import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000";
export const characterApi = createApi({
  reducerPath: "character",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/character` }),
  tagTypes: ["Characters"],
  endpoints: (builder) => ({
    getCharactersForProfile: builder.query({
      query: (profileId) => `/all/${profileId}`,
      providesTags: ["Characters"],
    }),
    getCharacter: builder.query({
      query: (characterId) => `/${characterId}`,
    }),
    makeCharacter: builder.mutation({
      query: (body) => ({ url: `/`, method: "POST", body: { ...body } }),
      invalidatesTags: ["Characters"],
    }),
  }),
});

export const {
  useGetCharactersForProfileQuery,
  useGetCharacterQuery,
  useMakeCharacterMutation,
} = characterApi;
