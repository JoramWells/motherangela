import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PatientInterface } from 'motherangela';

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/patient`,
  }),
  endpoints: (builder) => ({
    getPatients: builder.query<PaginatedResponse<PatientInterface>,
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
    addPatient: builder.mutation<PatientInterface, PatientInterface>({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPatient: builder.query<PatientInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    searchPatient: builder.query<PatientInterface[],
      { searchQuery: string }

    >({
      query: (params) => {
        if (params) {
          const { searchQuery } = params;
          let queryString = '';
          queryString += `searchQuery=${searchQuery}`;
          return `/search/?${queryString}`;
        }
        return 'search';
      },
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
  useGetPatientsQuery, useUpdatePatientMutation, useSearchPatientQuery,
  useDeletePatientMutation, useAddPatientMutation, useGetPatientQuery,
} = patientsApi;
