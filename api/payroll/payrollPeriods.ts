import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse } from 'motherangela';

export const payrollPeriodsApi = createApi({
  reducerPath: 'payrollPeriodsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-periods`,
  }),
  endpoints: (builder) => ({
    getAllPayrollPeriods: builder.query<PaginatedResponse<unknown>,
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
    addPayrollPeriods: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollPeriod: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollPeriod: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollPeriod: builder.mutation({
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
  useGetAllPayrollPeriodsQuery, useAddPayrollPeriodsMutation,
  useGetPayrollPeriodQuery,
  useUpdatePayrollPeriodMutation, useDeletePayrollPeriodMutation,
} = payrollPeriodsApi;
