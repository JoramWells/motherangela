/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollPeriodEmployeePayCalculationsInterface } from 'motherangela';

export const payrollEmployeePayCalculationsApi = createApi({
  reducerPath: 'payrollEmployeePayCalculationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-pay-calculations`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeePayCalculations: builder.query<PaginatedResponse<PayrollPeriodEmployeePayCalculationsInterface>,
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
    addPayrollEmployeePayCalculations: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeePayCalculations: builder.query<PayrollPeriodEmployeePayCalculationsInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getAllPayrollEmployeePayCalculationByPayrollID: builder.query<PaginatedResponse<PayrollPeriodEmployeePayCalculationsInterface>,
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
    updatePayrollEmployeePayCalculations: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeePayCalculations: builder.mutation({
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
  useGetAllPayrollEmployeePayCalculationsQuery, useAddPayrollEmployeePayCalculationsMutation,
  useGetPayrollEmployeePayCalculationsQuery, useGetAllPayrollEmployeePayCalculationByPayrollIDQuery,
  useUpdatePayrollEmployeePayCalculationsMutation, useDeletePayrollEmployeePayCalculationsMutation,
} = payrollEmployeePayCalculationsApi;
