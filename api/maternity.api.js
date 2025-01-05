import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const maternityProfileApi = createApi({
  reducerPath: 'maternityProfileApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:5001',
    baseUrl: `${process.env.REACT_APP_API_URL}/api/root-server`,

  }),
  endpoints: (builder) => ({
    getMaternityProfiles: builder.query({
      query: () => 'maternity-profile/fetchAll',
    }),

    // Get Maternity Antenatal Profile
    getMaternityAntenatalProfile: builder.query({
      query: () => 'maternity-antenatal-profile/fetchAll',
    }),
    addMaternityProfile: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getMaternityProfile: builder.query({
      query: (id) => `maternity-profile/detail/${id}`,
    }),
  }),
});

export const {
  useGetMaternityProfilesQuery, useGetMaternityAntenatalProfileQuery,
  useAddMaternityProfileMutation, useGetMaternityProfileQuery,
} = maternityProfileApi;
