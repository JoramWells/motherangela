import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const procedureItemApi = createApi({
  reducerPath: 'procedureItemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/procedure-service/procedure-items`,
  }),
  endpoints: (builder) => ({
    getProcedureItems: builder.query({
      query: () => 'fetchAll',
    }),
    addProcedureItem: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getProcedureItem: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateProcedureItem: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteProcedureItem: builder.mutation({
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
  useGetProcedureItemsQuery, useAddProcedureItemMutation,
  useGetProcedureItemQuery, useUpdateProcedureItemMutation, useDeleteProcedureItemMutation,
} = procedureItemApi;
