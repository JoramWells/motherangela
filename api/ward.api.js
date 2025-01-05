import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wardApi = createApi({
  reducerPath: 'wardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/root-server/wards`,

  }),
  endpoints: (builder) => ({
    getWards: builder.query({
      query: () => 'fetchAll',
    }),
    addWard: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getWardDetail: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateWard: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteWard: builder.mutation({
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
  useGetWardsQuery, useAddWardMutation,
  useGetWardDetailQuery, useUpdateWardMutation, useDeleteWardMutation,
} = wardApi;
