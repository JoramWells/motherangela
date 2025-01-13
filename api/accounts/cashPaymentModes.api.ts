import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, CashPaymentModesInterface } from 'motherangela';

export const cashPaymentModesApi = createApi({
  reducerPath: 'cashPaymentModesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/cash-payment-modes`,

  }),
  endpoints: (builder) => ({
    getAllCashPaymentModes:
    builder.query<PaginatedResponse<CashPaymentModesInterface>,
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
    addCashPaymentMode: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getCashPaymentMode: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateCashPaymentMode: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteCashPaymentMode: builder.mutation({
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
  useGetAllCashPaymentModesQuery, useAddCashPaymentModeMutation,
  useGetCashPaymentModeQuery,
  useUpdateCashPaymentModeMutation, useDeleteCashPaymentModeMutation,
} = cashPaymentModesApi;
