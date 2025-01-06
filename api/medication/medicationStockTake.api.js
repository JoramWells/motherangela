import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const medicationStockTakeApi = createApi({
  reducerPath: 'medicationStockTakeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/medication-stock-take',
  }),
  endpoints: (builder) => ({
    getAllMedicationStockTake: builder.query({
      query: () => 'fetchAll',
    }),
    addMedicationStockTake: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getMedicationStockTake: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedicationStockTake: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedicationStockTake: builder.mutation({
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
  useGetAllMedicationStockTakeQuery, useAddMedicationStockTakeMutation,
  useGetMedicationStockTakeQuery,
  useUpdateMedicationStockTakeMutation, useDeleteMedicationStockTakeMutation,
} = medicationStockTakeApi;
