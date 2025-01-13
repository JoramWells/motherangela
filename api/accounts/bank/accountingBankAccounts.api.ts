import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AccountingBankAccountsInterface } from 'motherangela';

export const accountingBankAccountApi = createApi({
  reducerPath: 'accountingBankAccountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/accounting-bank-accounts`,

  }),
  endpoints: (builder) => ({
    getAllAccountingBankAccounts: builder.query<AccountingBankAccountsInterface[], void>({
      query: () => 'fetchAll',
    }),
    addAccountingBankAccount: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingBankAccount: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingBankAccount: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingBankAccount: builder.mutation({
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
  useGetAllAccountingBankAccountsQuery, useAddAccountingBankAccountMutation,
  useGetAccountingBankAccountQuery,
  useUpdateAccountingBankAccountMutation, useDeleteAccountingBankAccountMutation,
} = accountingBankAccountApi;
