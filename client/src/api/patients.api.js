import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5003/patient',
  }),
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => 'fetchAll',
    }),
    addPatient: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPatient: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePatient: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePatient: builder.mutation({
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
  useGetPatientsQuery, useUpdatePatientMutation,
  useDeletePatientMutation, useAddPatientMutation, useGetPatientQuery,
} = patientsApi;
