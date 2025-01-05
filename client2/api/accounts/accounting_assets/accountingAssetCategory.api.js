import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingAssetCategoryApi = createApi({
  reducerPath: 'accountingAssetCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/account-asset-category`,

  }),
  endpoints: (builder) => ({
    getAllAccountingAssetCategories: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingAssetCategory: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingAssetCategory: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingAssetCategory: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingAssetCategory: builder.mutation({
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
  useGetAllAccountingAssetCategoriesQuery, useAddAccountingAssetCategoryMutation,
  useGetAccountingAssetCategoryQuery,
  useUpdateAccountingAssetCategoryMutation, useDeleteAccountingAssetCategoryMutation,
} = accountingAssetCategoryApi;
