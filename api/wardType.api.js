import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wardTypesApi = createApi({
  reducerPath: 'wardTypesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/ward-types',
  }),
  endpoints: (builder) => ({
    getAllWardTypes: builder.query({
      query: () => 'fetchAll',
    }),
    addWardType: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getWardType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateWardType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteWardType: builder.mutation({
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
  useGetAllWardTypesQuery, useAddWardTypeMutation,
  useGetWardTypeQuery,
  useUpdateWardTypeMutation, useDeleteWardTypeMutation,
} = wardTypesApi;
