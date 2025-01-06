import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const medicationCategoryApi = createApi({
  reducerPath: 'medicationCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/root-server/medication-category`,

  }),
  endpoints: (builder) => ({
    getAllMedicationCategory: builder.query({
      query: () => 'fetchAll',
    }),
    addMedicationCategory: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getMedicationCategory: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedicationCategory: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedicationCategory: builder.mutation({
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
  useGetAllMedicationCategoryQuery, useAddMedicationCategoryMutation, useGetMedicationCategoryQuery,
  useUpdateMedicationCategoryMutation, useDeleteMedicationCategoryMutation,
} = medicationCategoryApi;
