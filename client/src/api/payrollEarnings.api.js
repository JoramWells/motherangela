import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const payrollEarningsApi = createApi({
  reducerPath: 'payrollEarningsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/payroll-earnings',
  }),
  endpoints: (builder) => ({
    getAllPayrollEarnings: builder.query({
      query: () => 'fetchAll',
    }),
    addPayrollEarning: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEarning: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEarning: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEarning: builder.mutation({
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
  useGetAllPayrollEarningsQuery, useAddPayrollEarningMutation, useGetPayrollEarningQuery,
  useUpdatePayrollEarningMutation, useDeletePayrollEarningMutation,
} = payrollEarningsApi;
