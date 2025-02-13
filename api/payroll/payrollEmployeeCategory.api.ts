import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeCategoryInterface } from 'motherangela';

export const payrollEmployeeCategoryApi = createApi({
  reducerPath: 'payrollEmployeeCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-category`,

  }),
  endpoints: (builder) => ({

    getPayrollEmployeeCategories:
    builder.query<PaginatedResponse<PayrollEmployeeCategoryInterface>,
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
    addPayrollEmployeeCategory: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getPayrollEmployeeCategory: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEmployeeCategory: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeCategory: builder.mutation({
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
  useGetPayrollEmployeeCategoriesQuery, useAddPayrollEmployeeCategoryMutation,
  useGetPayrollEmployeeCategoryQuery, useUpdatePayrollEmployeeCategoryMutation,
  useDeletePayrollEmployeeCategoryMutation,
} = payrollEmployeeCategoryApi;
