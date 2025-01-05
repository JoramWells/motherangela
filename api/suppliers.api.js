import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const supplierApi = createApi({
  reducerPath: 'supplierApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/suppliers',
  }),
  endpoints: (builder) => ({
    getSuppliers: builder.query({
      query: () => 'fetchAll',
    }),
    addSupplier: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getSupplier: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateSupplier: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteSupplier: builder.mutation({
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
  useGetSuppliersQuery, useAddSupplierMutation,
  useGetSupplierQuery, useUpdateSupplierMutation, useDeleteSupplierMutation,
} = supplierApi;
