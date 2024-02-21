import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const diseaseApi = createApi({
  reducerPath: 'diseaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5011/disease',
  }),
  endpoints: (builder) => ({
    getDiseases: builder.query({
      query: () => 'fetchAll',
    }),
    addDisease: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getDisease: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateDisease: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteDisease: builder.mutation({
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
  useGetDiseasesQuery, useAddDiseaseMutation, useGetDiseaseQuery,
  useUpdateDiseaseMutation, useDeleteDiseaseMutation,
} = diseaseApi;
