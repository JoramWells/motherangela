import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const maternityProfileApi = createApi({
  reducerPath: "maternityProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-profile`,
  }),
  endpoints: (builder) => ({
    getAllMaternityProfiles: builder.query({
      query: () => "/fetchAll",
    }),

    addMaternityProfile: builder.mutation({
      query: (newMaternity) => ({
        url: "add",
        method: "POST",
        body: newMaternity,
      }),
    }),
    getMaternityProfile: builder.query({
      query: (id) => `/detail/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityProfilesQuery,
  useAddMaternityProfileMutation, useGetMaternityProfileQuery,
} = maternityProfileApi;
