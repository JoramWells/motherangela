/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeDeductionInterface } from 'motherangela';

export const payrollEmployeeDeductionsApi = createApi({
  reducerPath: 'payrollEmployeeDeductionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-deductions`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeDeductions: builder.query<PaginatedResponse<PayrollEmployeeDeductionInterface>,
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
    addPayrollEmployeeDeductions: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeeDeductions: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEmployeeDeductions: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeDeductions: builder.mutation({
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
  useGetAllPayrollEmployeeDeductionsQuery,
  useAddPayrollEmployeeDeductionsMutation, useGetPayrollEmployeeDeductionsQuery,
  useUpdatePayrollEmployeeDeductionsMutation, useDeletePayrollEmployeeDeductionsMutation,
} = payrollEmployeeDeductionsApi;
