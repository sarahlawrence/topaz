import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000";
export const profileApi = createApi({
  reducerPath: "profiles",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/` }),
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => `profile`,
    }),
  }),
});

export const { useGetProfilesQuery } = profileApi;
