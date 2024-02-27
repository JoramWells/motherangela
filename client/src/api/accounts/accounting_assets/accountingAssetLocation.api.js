import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingAssetLocationApi = createApi({
  reducerPath: 'accountingAssetLocationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5010/account-asset-location',
  }),
  endpoints: (builder) => ({
    getAllAccountingAssetLocations: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingAssetLocation: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingAssetLocation: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingAssetLocation: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingAssetLocation: builder.mutation({
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
  useGetAllAccountingAssetLocationsQuery, useAddAccountingAssetLocationMutation,
  useGetAccountingAssetLocationQuery,
  useUpdateAccountingAssetLocationMutation, useDeleteAccountingAssetLocationMutation,
} = accountingAssetLocationApi;
