import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const payrollPayTypeApi = createApi({
  reducerPath: 'payrollPayTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/payroll-pay-type',
  }),
  endpoints: (builder) => ({
    getAllPayrollPayTypes: builder.query({
      query: () => 'fetchAll',
    }),
    addPayrollPayType: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getPayrollPayType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollPayType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollPayType: builder.mutation({
      query(id) {
        return {
          url: `delete/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetAllPayrollPayTypesQuery, useAddPayrollPayTypeMutation,
  useGetPayrollPayTypeQuery, useUpdatePayrollPayTypeMutation,
  useDeletePayrollPayTypeMutation,
} = payrollPayTypeApi;
