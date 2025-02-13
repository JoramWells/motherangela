import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeeNHIFFileInterface } from 'motherangela';

export const payrollEmployeeNHIFFileApi = createApi({
  reducerPath: 'payrollEmployeeNHIFFileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-nhif`,

  }),
  endpoints: (builder) => ({

    getAllPayrollEmployeeNHIFFiles:
    builder.query<PaginatedResponse<PayrollEmployeeNHIFFileInterface>,
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
    addPayrollEmployeeNHIFFile: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getPayrollEmployeeNHIFFile: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getPayrollEmployeeNHIFFilesByPayrollID:
    builder.query<PaginatedResponse<PayrollEmployeeNHIFFileInterface>,
          {id?: string, page: number; pageSize: number; searchQuery: string }

        >({
          query: (params) => {
            if (params) {
              const {
                id, page, pageSize, searchQuery,
              } = params;
              let queryString = '';
              queryString += `page=${page}`;
              queryString += `&pageSize=${pageSize}`;
              queryString += `&searchQuery=${searchQuery}`;
              return `/by-payroll-id/${id}/?${queryString}`;
            }
            return 'by-payroll-id';
          },
        }),
    updatePayrollEmployeeNHIFFile: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeNHIFFile: builder.mutation({
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
  useGetAllPayrollEmployeeNHIFFilesQuery, useAddPayrollEmployeeNHIFFileMutation,
  useGetPayrollEmployeeNHIFFileQuery, useUpdatePayrollEmployeeNHIFFileMutation,
  useDeletePayrollEmployeeNHIFFileMutation, useGetPayrollEmployeeNHIFFilesByPayrollIDQuery,
} = payrollEmployeeNHIFFileApi;
