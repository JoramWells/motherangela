import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingCostCentreApi = createApi({
  reducerPath: 'accountingCostCentreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/cost-centre`,

  }),
  endpoints: (builder) => ({
    getAllAccountingCostCentres: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingCostCentre: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingCostCentre: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingCostCentre: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingCostCentre: builder.mutation({
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
  useGetAllAccountingCostCentresQuery, useAddAccountingCostCentreMutation,
  useGetAccountingCostCentreQuery,
  useUpdateAccountingCostCentreMutation, useDeleteAccountingCostCentreMutation,
} = accountingCostCentreApi;
