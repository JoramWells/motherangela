import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const insuranceTypeApi = createApi({
  reducerPath: 'insuranceTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/insurance-types',
  }),
  endpoints: (builder) => ({
    getAllInsuranceTypes: builder.query({
      query: () => 'fetchAll',
    }),
    addInsuranceType: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getInsuranceType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateInsuranceType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInsuranceType: builder.mutation({
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
  useGetAllInsuranceTypesQuery, useUpdateInsuranceTypeMutation,
  useDeleteInsuranceTypeMutation, useAddInsuranceTypeMutation, useGetInsuranceTypeQuery,
} = insuranceTypeApi;
