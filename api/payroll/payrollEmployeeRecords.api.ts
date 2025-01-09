import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const payrollEmployeeRecordsApi = createApi({
  reducerPath: 'payrollEmployeeRecordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-records`,
  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeRecords: builder.query({
      query: () => 'fetchAll',
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
