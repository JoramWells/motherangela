import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingSupplierApi = createApi({
  reducerPath: 'accountingSupplierApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/accounting-suppliers`,

  }),
  endpoints: (builder) => ({
    getAllAccountingSuppliers: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingSupplier: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingSupplier: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingSupplier: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingSupplier: builder.mutation({
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
  useGetAllAccountingSuppliersQuery, useAddAccountingSupplierMutation,
  useGetAccountingSupplierQuery,
  useUpdateAccountingSupplierMutation, useDeleteAccountingSupplierMutation,
} = accountingSupplierApi;
