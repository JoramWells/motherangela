/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeBenefitsFileInterface } from 'motherangela';

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
  useGetPayrollEmployeeBenefitQuery,
  useUpdatePayrollEmployeeBenefitMutation, useDeletePayrollEmployeeBenefitMutation,
} = payrollEmployeeBenefitsApi;
