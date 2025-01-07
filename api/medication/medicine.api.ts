import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const medicineApi = createApi({
  reducerPath: "medicineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/medication`,
  }),
  endpoints: (builder) => ({
    getAllMedication: builder.query<MedicineStockInterface[], void>({
      query: () => "fetchAll",
    }),
    addMedication: builder.mutation({
      query: (newMedication) => ({
        url: "add",
        method: "POST",
        body: newMedication,
      }),
    }),
    getMedication: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedication: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    deleteMedication: builder.mutation({
      query(id) {
        return {
          url: `delete${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllMedicationQuery, useAddMedicationMutation, useGetMedicationQuery,
  useUpdateMedicationMutation, useDeleteMedicationMutation,
} = medicineApi;
