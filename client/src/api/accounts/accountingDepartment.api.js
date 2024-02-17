import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingDepartmentApi = createApi({
  reducerPath: 'accountingDepartmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5010/accounting-department',
  }),
  endpoints: (builder) => ({
    getAllAccountingDepartments: builder.query({
      query: () => 'fetchAll',
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
