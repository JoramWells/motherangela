/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeLoanDeductionsInterface } from 'motherangela';

export const payrollEmployeePayrollDeductionsApi = createApi({
  reducerPath: 'payrollEmployeePayrollDeductionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-loan-deductions`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeLoanDeductions: builder.query<PaginatedResponse<PayrollEmployeeLoanDeductionsInterface>,
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
    addPayrollEmployeeLoanDeductions: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeeLoanDeductions: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getAllPayrollEmployeeLoanDeductionByPayrollID: builder.query<PaginatedResponse<PayrollEmployeeLoanDeductionsInterface>,
      {id?: string, page: number; pageSize: number; searchQuery: string,
        employee_id?: string

       }

    >({
      query: (params) => {
        if (params) {
          const {
            id, page, pageSize, searchQuery, employee_id,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&employee_id=${employee_id}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/by-payroll-id/${id}/?${queryString}`;
        }
        return 'by-payroll-id';
      },
    }),
    updatePayrollEmployeeLoanDeductions: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeLoanDeductions: builder.mutation({
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
  useGetAllPayrollEmployeeLoanDeductionsQuery, useAddPayrollEmployeeLoanDeductionsMutation,
  useGetPayrollEmployeeLoanDeductionsQuery, useGetAllPayrollEmployeeLoanDeductionByPayrollIDQuery,
  useUpdatePayrollEmployeeLoanDeductionsMutation, useDeletePayrollEmployeeLoanDeductionsMutation,
} = payrollEmployeePayrollDeductionsApi;
