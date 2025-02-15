import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeRecordsInterface } from 'motherangela';

export const payrollEmployeeRecordsApi = createApi({
  reducerPath: 'payrollEmployeeRecordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-records`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeRecords: builder.query<PaginatedResponse<PayrollEmployeeRecordsInterface>,
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
    addPayrollEmployeeRecord: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeeRecord: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEmployeeRecord: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeRecord: builder.mutation({
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
  useGetAllPayrollEmployeeRecordsQuery,
  useAddPayrollEmployeeRecordMutation, useGetPayrollEmployeeRecordQuery,
  useUpdatePayrollEmployeeRecordMutation, useDeletePayrollEmployeeRecordMutation,
} = payrollEmployeeRecordsApi;
