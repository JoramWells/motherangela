import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingAccountDetailsApi = createApi({
  reducerPath: 'accountingAccountDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5010/account-details',
  }),
  endpoints: (builder) => ({
    getAllAccountingAccountDetails: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingAccountDetail: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingAccountDetail: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingAccountDetail: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingAccountDetail: builder.mutation({
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
  useGetAllAccountingAccountDetailsQuery, useAddAccountingAccountDetailMutation,
  useGetAccountingAccountDetailQuery,
  useUpdateAccountingAccountDetailMutation, useDeleteAccountingAccountDetailMutation,
} = accountingAccountDetailsApi;
