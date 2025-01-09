/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InsuranceMedicineMappingInterface, PaginatedResponse } from 'motherangela';

export const insuranceMedicineMappingApi = createApi({
  reducerPath: 'insuranceMedicineMappingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/insurance-medication-mapping`,

  }),
  endpoints: (builder) => ({
    getAllInsuranceMedicationMapping: builder.query<PaginatedResponse<InsuranceMedicineMappingInterface>,
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
    addInsuranceMedicationMapping: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getMedicationInsuranceMedicationMapping: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateInsuranceMedicationMapping: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInsuranceMedicationMapping: builder.mutation({
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
  useGetAllInsuranceMedicationMappingQuery,
  useAddInsuranceMedicationMappingMutation,
  useGetMedicationInsuranceMedicationMappingQuery,
  useUpdateInsuranceMedicationMappingMutation,
  useDeleteInsuranceMedicationMappingMutation,
} = insuranceMedicineMappingApi;
