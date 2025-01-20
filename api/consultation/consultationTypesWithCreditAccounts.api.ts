import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ConsultationGroupsWithCreditAccountInterface, PaginatedResponse } from 'motherangela';

export const consultationTypesWithCreditAccountsApi = createApi({
  reducerPath: 'consultationTypesWithCreditAccountsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/consultation-groups-with-credit-accounts`,

  }),
  endpoints: (builder) => ({
    getAllConsultationTypesWithCreditAccounts: builder.query<
          PaginatedResponse<ConsultationGroupsWithCreditAccountInterface>,
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
} = consultationTypesWithCreditAccountsApi;
