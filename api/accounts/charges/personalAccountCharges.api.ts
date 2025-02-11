import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PersonalAccountChargeInterface } from 'motherangela';

export const personalAccountChargeApi = createApi({
  reducerPath: 'personalAccountChargeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/personal-account-charge`,

  }),
  endpoints: (builder) => ({
    getAllPersonalAccountCharges:
    builder.query<PaginatedResponse<PersonalAccountChargeInterface>,
      { page: number; pageSize: number; searchQuery: string, hospital_id?: string }

    >({
      query: (params) => {
        if (params) {
          const {
            page, pageSize, searchQuery, hospital_id,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&hospital_id=${hospital_id}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/fetchAll/?${queryString}`;
        }
        return 'fetchAll';
      },
    }),
    addPersonalAccountCharge: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPersonalAccountCharge: builder.query<PersonalAccountChargeInterface, string>({
      query: (id) => `detail/${id}`,
    }),

    // get personal account charge base on user-id
    getPersonalAccountChargeByPatientID: builder.query({
      query: (id) => `/by-patient-id/${id}`,
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
          url: `delete${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetAllPersonalAccountChargesQuery, useAddPersonalAccountChargeMutation,
  useGetPersonalAccountChargeQuery, useGetPersonalAccountChargeByPatientIDQuery,
  useUpdatePersonalAccountChargeMutation, useDeletePersonalAccountChargeMutation,
} = personalAccountChargeApi;
