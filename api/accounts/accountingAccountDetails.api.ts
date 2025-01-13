import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, AccountDetailsInterface } from 'motherangela';

export const accountingAccountDetailsApi = createApi({
  reducerPath: 'accountingAccountDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/account-details`,

  }),
  endpoints: (builder) => ({
    getAllAccountingAccountDetails:
    builder.query<PaginatedResponse<AccountDetailsInterface>,
      { page: number; pageSize: number; searchQuery: string }

    >({
      query: (params) => {
        if (params) {
          const { page, pageSize, searchQuery } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/fetchAll/?${queryString}`;
        }
        return 'fetchAll';
      },
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
