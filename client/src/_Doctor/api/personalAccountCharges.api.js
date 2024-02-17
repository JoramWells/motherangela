import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const personalAccountChargeApi = createApi({
  reducerPath: 'personalAccountChargeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/personal-account-charge',
  }),
  endpoints: (builder) => ({
    getAllPersonalAccountCharges: builder.query({
      query: () => 'fetchAll',
    }),
    addPersonalAccountCharge: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPersonalAccountCharge: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePersonalAccountCharge: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePersonalAccountCharge: builder.mutation({
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
  useGetAllPersonalAccountChargesQuery, useAddPersonalAccountChargeMutation,
  useGetPersonalAccountChargeQuery,
  useUpdatePersonalAccountChargeMutation, useDeletePersonalAccountChargeMutation,
} = personalAccountChargeApi;
