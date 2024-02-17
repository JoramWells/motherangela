import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aLabApi = createApi({
  reducerPath: 'aLabApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/lab',
  }),
  endpoints: (builder) => ({
    getAllALabs: builder.query({
      query: () => 'fetchAll',
    }),
    addALab: builder.mutation({
      query: (newCredit) => ({
        url: 'add',
        method: 'POST',
        body: newCredit,
      }),
    }),
    getALab: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateALab: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteALab: builder.mutation({
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
  useGetAllALabsQuery, useAddALabMutation, useGetALabQuery,
  useUpdateALabMutation, useDeleteALabMutation,
} = aLabApi;
