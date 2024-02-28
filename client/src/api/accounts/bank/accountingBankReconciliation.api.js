import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingBankReconciliationApi = createApi({
  reducerPath: 'accountingBankReconciliationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5010/accounting-bank-reconciliation',
  }),
  endpoints: (builder) => ({
    getAllAccountingBankReconciliation: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingBankReconciliation: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingBankReconciliation: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingBankReconciliation: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingBankReconciliation: builder.mutation({
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
  useGetAllAccountingBankReconciliationQuery, useAddAccountingBankReconciliationMutation,
  useGetAccountingBankReconciliationQuery,
  useUpdateAccountingBankReconciliationMutation, useDeleteAccountingBankReconciliationMutation,
} = accountingBankReconciliationApi;
