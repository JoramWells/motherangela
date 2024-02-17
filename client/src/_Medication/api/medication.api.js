import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const medicationApi = createApi({
  reducerPath: 'medicationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/medication',
  }),
  endpoints: (builder) => ({
    getAllMedication: builder.query({
      query: () => 'fetchAll',
    }),
    addMedication: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getMedication: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedication: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedication: builder.mutation({
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
  useGetAllMedicationQuery, useAddMedicationMutation, useGetMedicationQuery,
  useUpdateMedicationMutation, useDeleteMedicationMutation,
} = medicationApi;
