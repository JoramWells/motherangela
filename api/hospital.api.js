import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hospitalApi = createApi({
  reducerPath: 'hospitalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/root-server/hospital-store`,

  }),
  endpoints: (builder) => ({
    getHospitalStores: builder.query({
      query: () => 'fetchAll',
    }),
    addWard: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
  }),
});

export const { useGetHospitalStoresQuery, useAddWardMutation } = hospitalApi;
