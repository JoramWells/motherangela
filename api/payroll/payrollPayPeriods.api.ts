import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollPayPeriodInterface } from 'motherangela';

export const payrollPayPeriodApi = createApi({
  reducerPath: 'payrollPayPeriodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-pay-periods`,

  }),
  endpoints: (builder) => ({

    getAllPayrollPayPeriods:
    builder.query<PaginatedResponse<PayrollPayPeriodInterface>,
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
    addPayrollPayPeriod: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getPayrollPayPeriod: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollPayPeriod: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollPayPeriod: builder.mutation({
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
  useGetAllPayrollPayPeriodsQuery, useAddPayrollPayPeriodMutation,
  useGetPayrollPayPeriodQuery, useUpdatePayrollPayPeriodMutation,
  useDeletePayrollPayPeriodMutation,
} = payrollPayPeriodApi;
