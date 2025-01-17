import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, AppointmentDiagnosisInterface } from 'motherangela';

export const appointmentDiagnosesApi = createApi({
  reducerPath: 'appointmentDiagnosesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/appointment-service/appointment-diagnoses`,
  }),
  endpoints: (builder) => ({
    getAppointmentDiagnosesDiagnoses: builder.query<
      PaginatedResponse<AppointmentDiagnosisInterface>,
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
    addAppointmentDiagnoses: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getAppointmentDiagnoses: builder.query<AppointmentDiagnosisInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getAppointmentDiagnosesDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
    }),
    updateAppointmentDiagnoses: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAppointment: builder.mutation({
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
  useGetAppointmentDiagnosesDiagnosesQuery, useAddAppointmentDiagnosesMutation,
  useGetAppointmentDiagnosesQuery, useUpdateAppointmentDiagnosesMutation,
  useDeleteAppointmentMutation, useGetAppointmentDiagnosesDetailByIDQuery,
} = appointmentDiagnosesApi;
