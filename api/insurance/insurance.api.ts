import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InsuranceInterface, PaginatedResponse } from 'motherangela';

export const insuranceApi = createApi({
  reducerPath: 'insuranceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/insurance`,
  }),
  endpoints: (builder) => ({
    getAllInsurances: builder.query<PaginatedResponse<InsuranceInterface>,
      { page: number; pageSize: number; searchQuery: string }

    >({
      query: (params) => {
        if (params) {
          const { page, pageSize, searchQuery } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/fetchAll/?${queryString}`;
        }
        return 'fetchAll';
      },
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
  useGetAllInsurancesQuery, useUpdateInsuranceMutation,
  useDeleteInsuranceMutation, useAddInsuranceMutation, useGetInsuranceQuery,
} = insuranceApi;
