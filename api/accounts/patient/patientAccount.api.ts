import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PatientAccountsInterface } from 'motherangela';

export const patientAccountApi = createApi({
  reducerPath: 'patientAccountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/patient-accounts`,

  }),
  endpoints: (builder) => ({
    getAllPatientAccounts:
    builder.query<PaginatedResponse<PatientAccountsInterface>,
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
    addPatientAccount: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPatientAccount: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePatientAccount: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePatientAccount: builder.mutation({
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
  useGetAllPatientAccountsQuery, useAddPatientAccountMutation,
  useGetPatientAccountQuery,
  useUpdatePatientAccountMutation, useDeletePatientAccountMutation,
} = patientAccountApi;
