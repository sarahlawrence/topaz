import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000";
export const characterApi = createApi({
  reducerPath: "character",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/character/` }),
  endpoints: (builder) => ({
    getCharactersForProfile: builder.query({
      query: (profileId) => `all/${profileId}`,
    }),
    getCharacter: builder.query({
      query: (characterId) => `${characterId}`,
    }),
  }),
});

export const { useGetCharactersForProfileQuery, useGetCharacterQuery } =
  characterApi;
