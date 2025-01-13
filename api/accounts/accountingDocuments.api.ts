import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, AccountingDocumentsInterface } from 'motherangela';

export const accountingDocumentsApi = createApi({
  reducerPath: 'accountingDocumentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/accounting-documents`,

  }),
  endpoints: (builder) => ({
    getAllAccountingDocuments: builder.query<PaginatedResponse<AccountingDocumentsInterface>,
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
    addAccountingDocument: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingDocument: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingDocument: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingDocument: builder.mutation({
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
  useGetAllAccountingDocumentsQuery, useAddAccountingDocumentMutation,
  useGetAccountingDocumentQuery,
  useUpdateAccountingDocumentMutation, useDeleteAccountingDocumentMutation,
} = accountingDocumentsApi;
