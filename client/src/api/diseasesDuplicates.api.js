import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const diseasesDuplicatesApi = createApi({
  reducerPath: 'diseasesDuplicatesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5011/diseases-duplicates',
  }),
  endpoints: (builder) => ({
    getAllDiseasesDuplicates: builder.query({
      query: () => 'fetchAll',
    }),
    addDiseasesDuplicates: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getDiseasesDuplicates: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateDiseasesDuplicates: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteDiseasesDuplicates: builder.mutation({
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
  useGetAllDiseasesDuplicatesQuery, useAddDiseasesDuplicatesMutation, useGetDiseasesDuplicatesQuery,
  useUpdateDiseasesDuplicatesMutation, useDeleteDiseasesDuplicatesMutation,
} = diseasesDuplicatesApi;
