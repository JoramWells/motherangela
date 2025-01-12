import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeMonthlyDeductionInterface } from 'motherangela';

export const payrollMonthlyDeductionsApi = createApi({
  reducerPath: 'payrollMonthlyDeductionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-monthly-deductions`,

  }),
  endpoints: (builder) => ({
    getAllPayrollMonthlyDeductions: builder.query({
      query: () => 'fetchAll',
    }),
    addPayrollMonthlyDeductions: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollMonthlyDeduction: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getPayrollMonthlyDeductionByPayrollID:
    builder.query<PaginatedResponse<PayrollEmployeeMonthlyDeductionInterface>,
      {id?: string, page: number; pageSize: number; searchQuery: string }

    >({
      query: (params) => {
        if (params) {
          const {
            id, page, pageSize, searchQuery,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/by-payroll-id/${id}/?${queryString}`;
        }
        return 'by-payroll-id';
      },
    }),
    updatePayrollMonthlyDeduction: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollMonthlyDeduction: builder.mutation({
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
  useGetAllPayrollMonthlyDeductionsQuery, useAddPayrollMonthlyDeductionsMutation,
  useGetPayrollMonthlyDeductionQuery, useGetPayrollMonthlyDeductionByPayrollIDQuery,
  useUpdatePayrollMonthlyDeductionMutation, useDeletePayrollMonthlyDeductionMutation,
} = payrollMonthlyDeductionsApi;
