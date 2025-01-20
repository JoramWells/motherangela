import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, InvoicePaymentInterface } from 'motherangela';

export const invoicePaymentsApi = createApi({
  reducerPath: 'invoicePaymentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/invoice-payments`,

  }),
  endpoints: (builder) => ({
    getAllInvoicePayment: builder.query<PaginatedResponse<InvoicePaymentInterface>,
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
    addInvoicePayment: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getInvoicePayment: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateInvoicePayment: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInvoicePayment: builder.mutation({
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
  useGetAllInvoicePaymentQuery, useAddInvoicePaymentMutation,
  useGetInvoicePaymentQuery,
  useUpdateInvoicePaymentMutation, useDeleteInvoicePaymentMutation,
} = invoicePaymentsApi;
