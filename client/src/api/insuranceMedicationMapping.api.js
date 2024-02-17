import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const insuranceMedicationMappingApi = createApi({
  reducerPath: 'insuranceMedicationMappingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/insurance-medication-mapping',
  }),
  endpoints: (builder) => ({
    getAllInsuranceMedicationMapping: builder.query({
      query: () => 'fetchAll',
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
} = insuranceMedicationMappingApi;
