import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wardBedsApi = createApi({
  reducerPath: 'wardBedsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/ward-beds',
  }),
  endpoints: (builder) => ({
    getAllBeds: builder.query({
      query: () => 'fetchAll',
    }),
    addBed: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getBed: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateBed: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteBed: builder.mutation({
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
  useGetAllBedsQuery, useAddBedMutation,
  useGetBedQuery,
  useUpdateBedMutation, useDeleteBedMutation,
} = wardBedsApi;
