import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeLoanRecordsInterface } from 'motherangela';

export const payrollEmployeeLoanRecordsApi = createApi({
  reducerPath: 'payrollEmployeeLoanRecordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-loan-records`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeLoanRecords: builder.query<PaginatedResponse<
    PayrollEmployeeLoanRecordsInterface>,
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
    addPayrollEmployeeLoanRecord: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeeLoanRecord: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEmployeeLoanRecord: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeLoanRecord: builder.mutation({
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
  useGetAllPayrollEmployeeLoanRecordsQuery,
  useAddPayrollEmployeeLoanRecordMutation, useGetPayrollEmployeeLoanRecordQuery,
  useUpdatePayrollEmployeeLoanRecordMutation, useDeletePayrollEmployeeLoanRecordMutation,
} = payrollEmployeeLoanRecordsApi;
