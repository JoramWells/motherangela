import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingStoresApi = createApi({
  reducerPath: 'accountingStoresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5010/stores',
  }),
  endpoints: (builder) => ({
    getAllAccountingStores: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingStore: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingStore: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingStore: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingStore: builder.mutation({
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
  useGetAllAccountingStoresQuery, useAddAccountingStoreMutation,
  useGetAccountingStoreQuery,
  useUpdateAccountingStoreMutation, useDeleteAccountingStoreMutation,
} = accountingStoresApi;
