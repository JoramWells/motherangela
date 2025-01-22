import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AccountTypeInterface, PaginatedResponse } from 'motherangela';

export const accountTypeApi = createApi({
  reducerPath: 'accountTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/account-type`,

  }),
  endpoints: (builder) => ({

    getAllAccountTypes: builder.query<PaginatedResponse<AccountTypeInterface>,
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
    addAccountType: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountType: builder.mutation({
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
  useGetAllAccountTypesQuery, useAddAccountTypeMutation,
  useGetAccountTypeQuery,
  useUpdateAccountTypeMutation, useDeleteAccountTypeMutation,
} = accountTypeApi;
