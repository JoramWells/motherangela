import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const maternityAntenatalProfileApi = createApi({
  reducerPath: "maternityAntenatalProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-antenatal-profile`,
  }),
  endpoints: (builder) => ({

    // Get Maternity Antenatal Profile
    getAllMaternityAntenatalProfile: builder.query<AntenatalProfileInterface[], void>({
      query: () => "/fetchAll",
    }),
    addMaternityAntenatalProfile: builder.mutation({
      query: (newMaternity) => ({
        url: "add",
        method: "POST",
        body: newMaternity,
      }),
    }),
    getAntenatalMaternityProfile: builder.query({
      query: (id) => `/detail/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityAntenatalProfileQuery,
  useAddMaternityAntenatalProfileMutation, useGetAntenatalMaternityProfileQuery,
} = maternityAntenatalProfileApi;
