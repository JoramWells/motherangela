import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, AccountingAssetsInterface } from 'motherangela';

export const accountingAssetApi = createApi({
  reducerPath: 'accountingAssetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/accounting-asset`,

  }),
  endpoints: (builder) => ({
    getAllAccountingAsset: builder.query<PaginatedResponse<AccountingAssetsInterface>,
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
    addAccountingAsset: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingAsset: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingAsset: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingAsset: builder.mutation({
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
  useGetAllAccountingAssetQuery, useAddAccountingAssetMutation,
  useGetAccountingAssetQuery,
  useUpdateAccountingAssetMutation, useDeleteAccountingAssetMutation,
} = accountingAssetApi;
