import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingItemApi = createApi({
  reducerPath: 'accountingItemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/accounting-items',
  }),
  endpoints: (builder) => ({
    getAllAccountingItems: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingItem: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingItem: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingItem: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingItem: builder.mutation({
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
  useGetAllAccountingItemsQuery, useAddAccountingItemMutation,
  useGetAccountingItemQuery,
  useUpdateAccountingItemMutation, useDeleteAccountingItemMutation,
} = accountingItemApi;
