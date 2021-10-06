import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/` }),
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => `profile`,
    }),
    getCharactersForProfile: builder.query({
      query: (profileId) => `character/all/${profileId}`,
    }),
    getCharacter: builder.query({
      query: (characterId) => `character/${characterId}`,
    }),
  }),
});

export const {
  useGetProfilesQuery,
  useGetCharactersForProfileQuery,
  useGetCharacterQuery,
} = api;
