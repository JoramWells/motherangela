import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const payrollEmployeeCategoryApi = createApi({
  reducerPath: 'payrollEmployeeCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/payroll-employee-category',
  }),
  endpoints: (builder) => ({
    getPayrollEmployeeCategories: builder.query({
      query: () => 'fetchAll',
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
