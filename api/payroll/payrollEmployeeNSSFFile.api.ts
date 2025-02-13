import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeNSSFFileInterface } from 'motherangela';

export const payrollEmployeeNSSFFileApi = createApi({
  reducerPath: 'payrollEmployeeNSSFFileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-nssf`,

  }),
  endpoints: (builder) => ({

    getAllPayrollEmployeeNSSFFiles:
    builder.query<PaginatedResponse<PayrollEmployeeNSSFFileInterface>,
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
    addPayrollEmployeeNSSFFile: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getPayrollEmployeeNSSFFile: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEmployeeNSSFFile: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeNSSFFile: builder.mutation({
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
  useGetAllPayrollEmployeeNSSFFilesQuery, useAddPayrollEmployeeNSSFFileMutation,
  useGetPayrollEmployeeNSSFFileQuery, useUpdatePayrollEmployeeNSSFFileMutation,
  useDeletePayrollEmployeeNSSFFileMutation,
} = payrollEmployeeNSSFFileApi;
