import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const insuranceApi = createApi({
  reducerPath: 'insuranceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/root-server/insurance`,

  }),
  endpoints: (builder) => ({
    getInsurances: builder.query({
      query: () => 'fetchAll',
    }),
    addInsurance: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getInsurance: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateInsurance: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInsurance: builder.mutation({
      query(id) {
        return {
          url: `delete/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetInsurancesQuery, useUpdateInsuranceMutation,
  useDeleteInsuranceMutation, useAddInsuranceMutation, useGetInsuranceQuery,
} = insuranceApi;
