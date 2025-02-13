import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PayrollEmployeePensionInterface } from 'motherangela';

export const payrollEmployeePensionApi = createApi({
  reducerPath: 'payrollEmployeePensionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/payroll-service/payroll-employee-pension`,

  }),
  endpoints: (builder) => ({

    getAllPayrollEmployeePensions:
    builder.query<PaginatedResponse<PayrollEmployeePensionInterface>,
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
    addPayrollEmployeePension: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getPayrollEmployeePension: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getPayrollEmployeePensionByPayrollID:
            builder.query<PaginatedResponse<PayrollEmployeePensionInterface>,
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
    updatePayrollEmployeePension: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeePension: builder.mutation({
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
  useGetAllPayrollEmployeePensionsQuery, useAddPayrollEmployeePensionMutation,
  useGetPayrollEmployeePensionQuery, useUpdatePayrollEmployeePensionMutation,
  useDeletePayrollEmployeePensionMutation, useGetPayrollEmployeePensionByPayrollIDQuery,
} = payrollEmployeePensionApi;
