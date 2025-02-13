/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeBenefitsFileInterface, PayrollEmployeeRecordsInterface } from 'motherangela';

export interface PayrollEmployeeDistinctBenefitsFileInterface{
  count: number
  employee_id: number
  payroll_employee_record?: PayrollEmployeeRecordsInterface
}

export const payrollEmployeeBenefitsApi = createApi({
  reducerPath: 'payrollEmployeeBenefitsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-benefits-file`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeBenefits: builder.query<PaginatedResponse<PayrollEmployeeBenefitsFileInterface>,
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
    addPayrollEmployeeBenefits: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeeBenefit: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getAllPayrollEmployeeBenefitsFileByPayrollID: builder.query<PaginatedResponse<PayrollEmployeeDistinctBenefitsFileInterface>,
      {id?: string, page: number; pageSize: number; searchQuery: string,
       }

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
    getAllPayrollEmployeeBenefitsFileByEmployeeID: builder.query<PaginatedResponse<PayrollEmployeeBenefitsFileInterface>,
      {id?: string, employee_id?:string, page: number; pageSize: number; searchQuery: string,
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
          return `/by-employee-id/${id}/?${queryString}`;
        }
        return 'by-employee-id';
      },
    }),
    updatePayrollEmployeeBenefit: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeBenefit: builder.mutation({
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
  useGetAllPayrollEmployeeBenefitsQuery, useAddPayrollEmployeeBenefitsMutation,
  useGetPayrollEmployeeBenefitQuery, useGetAllPayrollEmployeeBenefitsFileByPayrollIDQuery,
  useUpdatePayrollEmployeeBenefitMutation, useDeletePayrollEmployeeBenefitMutation, useGetAllPayrollEmployeeBenefitsFileByEmployeeIDQuery,
} = payrollEmployeeBenefitsApi;
