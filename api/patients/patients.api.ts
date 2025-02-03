import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PatientInterface } from 'motherangela';

export type SelectedPatientTypes = Pick<
  PatientInterface,
  | 'first_name'
  | 'middle_name'
  // | 'cell_phone'
  | 'company_id'
  | 'dob'
  | 'hospital_id'
  | 'last_name'
  | 'nhif_no'
  | 'patient_gender'
  | 'id_number'
  | 'residence'
  | 'residence_id'
  | 'next_of_kin'
  | 'next_of_kin_name'
  | 'nxt_of_kin_cell_phone'
  | 'email'
>;

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/patient`,
  }),
  endpoints: (builder) => ({
    getPatients: builder.query<PaginatedResponse<PatientInterface>,
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
    addPatient: builder.mutation<PatientInterface, SelectedPatientTypes>({
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
