import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const payrollDeductionsApi = createApi({
  reducerPath: 'payrollDeductionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/payroll-service/payroll-deductions`,

  }),
  endpoints: (builder) => ({
    getAllPayrollDeductions: builder.query({
      query: () => 'fetchAll',
    }),
    addPayrollDeductions: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollDeduction: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollDeduction: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollDeduction: builder.mutation({
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
  useGetAllPayrollDeductionsQuery, useAddPayrollDeductionsMutation, useGetPayrollDeductionQuery,
  useUpdatePayrollDeductionMutation, useDeletePayrollDeductionMutation,
} = payrollDeductionsApi;
