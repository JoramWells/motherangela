import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountingJournalApi = createApi({
  reducerPath: 'accountingJournalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/accounting-journal`,

  }),
  endpoints: (builder) => ({
    getAllAccountingJournals: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountingJournal: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountingJournal: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountingJournal: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountingJournal: builder.mutation({
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
  useGetAllAccountingJournalsQuery, useAddAccountingJournalMutation,
  useGetAccountingJournalQuery,
  useUpdateAccountingJournalMutation, useDeleteAccountingJournalMutation,
} = accountingJournalApi;
