import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AccountingDepartmentInterface, PaginatedResponse } from 'motherangela';

export const accountingDepartmentApi = createApi({
  reducerPath: 'accountingDepartmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/accounting-department`,

  }),
  endpoints: (builder) => ({
    getAllAccountingDepartments: builder.query<PaginatedResponse<AccountingDepartmentInterface>,
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
    addAccountingDepartment: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingDepartment: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingDepartment: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingDepartment: builder.mutation({
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
  useGetAllAccountingDepartmentsQuery, useAddAccountingDepartmentMutation,
  useGetAccountingDepartmentQuery,
  useUpdateAccountingDepartmentMutation, useDeleteAccountingDepartmentMutation,
} = accountingDepartmentApi;
