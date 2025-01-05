import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const consultationTypesWitCreditAccountsApi = createApi({
  reducerPath: 'consultationTypesWitCreditAccountsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/consultation-groups-with-credit-accounts`,

  }),
  endpoints: (builder) => ({
    getAllConsultationTypesWithCreditAccounts: builder.query({
      query: () => 'fetchAll',
    }),
    addConsultationTypesWithCreditAccount: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getConsultationTypesWithCreditAccount: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateConsultationTypesWithCreditAccount: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteConsultationTypesWithCreditAccount: builder.mutation({
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
  useGetAllConsultationTypesWithCreditAccountsQuery,
  useAddConsultationTypesWithCreditAccountMutation,
  useGetConsultationTypesWithCreditAccountQuery,
  useUpdateConsultationTypesWithCreditAccountMutation,
  useDeleteConsultationTypesWithCreditAccountMutation,
} = consultationTypesWitCreditAccountsApi;
