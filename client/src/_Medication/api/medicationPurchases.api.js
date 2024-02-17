import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const medicationPurchasesApi = createApi({
  reducerPath: 'medicationPurchasesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/medication-purchase',
  }),
  endpoints: (builder) => ({
    getAllMedicationPurchases: builder.query({
      query: () => 'fetchAll',
    }),
    addMedicationPurchases: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getMedicationPurchases: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedicationPurchases: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedicationPurchases: builder.mutation({
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
  useGetAllMedicationPurchasesQuery, useAddMedicationPurchasesMutation,
  useGetMedicationPurchasesQuery,
  useUpdateMedicationPurchasesMutation, useDeleteMedicationPurchasesMutation,
} = medicationPurchasesApi;
