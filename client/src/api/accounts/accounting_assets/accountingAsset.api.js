import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingAssetApi = createApi({
  reducerPath: 'accountingAssetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/accounting-asset`,

  }),
  endpoints: (builder) => ({
    getAllAccountingAsset: builder.query({
      query: () => 'fetchAll',
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
