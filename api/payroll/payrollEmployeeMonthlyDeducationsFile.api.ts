/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeMonthlyDeductionFileInterface } from 'motherangela';

export const payrollEmployeeMonthlyDeductionsFileApi = createApi({
  reducerPath: 'payrollEmployeeMonthlyDeductionsFileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-monthly-deductions-file`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeMonthlyDeductionFiles: builder.query<PaginatedResponse<PayrollEmployeeMonthlyDeductionFileInterface>,
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
    addPayrollEmployeeMonthlyDeductionFiles: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeeMonthlyDeductionFiles: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getAllPayrollEmployeeMonthlyDeductionFileByPayrollID: builder.query<PaginatedResponse<PayrollEmployeeMonthlyDeductionFileInterface>,
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
    updatePayrollEmployeeMonthlyDeductionFiles: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeMonthlyDeductionFiles: builder.mutation({
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
  useGetAllPayrollEmployeeMonthlyDeductionFilesQuery, useAddPayrollEmployeeMonthlyDeductionFilesMutation,
  useGetPayrollEmployeeMonthlyDeductionFilesQuery, useGetAllPayrollEmployeeMonthlyDeductionFileByPayrollIDQuery,
  useUpdatePayrollEmployeeMonthlyDeductionFilesMutation, useDeletePayrollEmployeeMonthlyDeductionFilesMutation,
} = payrollEmployeeMonthlyDeductionsFileApi;
