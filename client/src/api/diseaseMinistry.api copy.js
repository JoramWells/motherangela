import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const diseaseMinistryApi = createApi({
  reducerPath: 'diseaseMinistryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/disease-ministry',
  }),
  endpoints: (builder) => ({
    getDiseaseMinistries: builder.query({
      query: () => 'fetchAll',
    }),
    addDiseaseMinistry: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getDiseaseMinistry: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateDiseaseMinistry: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteDiseaseMinistry: builder.mutation({
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
  useGetDiseaseMinistriesQuery, useAddDiseaseMinistryMutation, useGetDiseaseMinistryQuery,
  useUpdateDiseaseMinistryMutation, useDeleteDiseaseMinistryMutation,
} = diseaseMinistryApi;
