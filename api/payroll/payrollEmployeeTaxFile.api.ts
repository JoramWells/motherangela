import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeTaxFileInterface } from 'motherangela';

export const payrollEmployeeTaxFileApi = createApi({
  reducerPath: 'payrollEmployeeTaxFileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-tax-files`,

  }),
  endpoints: (builder) => ({

    getAllPayrollEmployeeTaxFiles:
    builder.query<PaginatedResponse<PayrollEmployeeTaxFileInterface>,
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
    addPayrollEmployeeTaxFile: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getPayrollEmployeeTaxFile: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEmployeeTaxFile: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeTaxFile: builder.mutation({
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
  useGetAllPayrollEmployeeTaxFilesQuery, useAddPayrollEmployeeTaxFileMutation,
  useGetPayrollEmployeeTaxFileQuery, useUpdatePayrollEmployeeTaxFileMutation,
  useDeletePayrollEmployeeTaxFileMutation,
} = payrollEmployeeTaxFileApi;
