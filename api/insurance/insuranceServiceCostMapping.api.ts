/* eslint-disable max-len */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InsuranceServiceCostMappingInterface, PaginatedResponse } from 'motherangela';

export const insuranceServiceCostMappingApi = createApi({
  reducerPath: 'insuranceServiceCostMappingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/insurance-service-cost-mapping`,

  }),
  endpoints: (builder) => ({
    getAllInsuranceServiceCostMapping: builder.query<PaginatedResponse<InsuranceServiceCostMappingInterface>,
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
    addInsuranceServiceCostMapping: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getInsuranceServiceCostMapping: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateInsuranceServiceCostMapping: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInsuranceServiceCostMapping: builder.mutation({
      query(id) {
        return {
          url: `delete${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetAllInsuranceServiceCostMappingQuery,
  useAddInsuranceServiceCostMappingMutation,
  useGetInsuranceServiceCostMappingQuery,
  useUpdateInsuranceServiceCostMappingMutation,
  useDeleteInsuranceServiceCostMappingMutation,
} = insuranceServiceCostMappingApi;
