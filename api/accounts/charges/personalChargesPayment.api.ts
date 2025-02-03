import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PersonalChargesPaymentsInterface } from 'motherangela';

export const personalChargesPaymentApi = createApi({
  reducerPath: 'personalChargesPaymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/personal-charges-payment`,

  }),
  endpoints: (builder) => ({
    getAllPersonalChargePayments:
    builder.query<PaginatedResponse<PersonalChargesPaymentsInterface>,
      { page: number; pageSize: number; searchQuery: string, status?: string, hospital_id?: string }

    >({
      query: (params) => {
        if (params) {
          const {
            page, pageSize, searchQuery, status, hospital_id,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&hospital_id=${hospital_id}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          queryString += `&status=${status}`;
          return `/fetchAll/?${queryString}`;
        }
        return 'fetchAll';
      },
    }),
    addPersonalChargePayment: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPersonalChargePayment: builder.query({
      query: (id) => `detail/${id}`,
    }),

    // get personal account charge base on user-id
    getUserPersonalAccountDetail: builder.query({
      query: (id) => `/user-personal-account-detail/${id}`,
    }),
    updatePersonalChargePayment: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePersonalChargePayment: builder.mutation({
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
  useGetAllPersonalChargePaymentsQuery, useAddPersonalChargePaymentMutation,
  useGetPersonalChargePaymentQuery, useGetUserPersonalAccountDetailQuery,
  useUpdatePersonalChargePaymentMutation, useDeletePersonalChargePaymentMutation,
} = personalChargesPaymentApi;
