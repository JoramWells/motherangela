import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const creditPaymentApi = createApi({
  reducerPath: 'creditPaymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/credit-payment',
  }),
  endpoints: (builder) => ({
    getCreditPayments: builder.query({
      query: () => 'fetchAll',
    }),
    addCreditPayment: builder.mutation({
      query: (newCredit) => ({
        url: 'add',
        method: 'POST',
        body: newCredit,
      }),
    }),
    getCreditPayment: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateCreditPayment: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteCreditPayment: builder.mutation({
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
  useGetCreditPaymentsQuery, useAddCreditPaymentMutation, useGetCreditPaymentQuery,
  useUpdateCreditPaymentMutation, useDeleteCreditPaymentMutation,
} = creditPaymentApi;
