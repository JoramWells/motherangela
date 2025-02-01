import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, AppointmentInterface } from 'motherangela';

export type SelectedAppointmentInterface = Pick<AppointmentInterface, 'account_type_id' | 'doctor_id' | 'consultation_type' | 'company_id'
| 'referral_type_id' | 'clinic_id' | 'consultation_group_id' | 'appointment_date' | 'hospital_id' | 'patient_id'
>

export const appointmentApi = createApi({
  reducerPath: 'appointmentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/appointment-service/appointment`,
  }),
  endpoints: (builder) => ({
    getAppointments: builder.query<
      PaginatedResponse<AppointmentInterface>,
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
    getAppointmentPatientQueue: builder.query<
      PaginatedResponse<AppointmentInterface>,
      { page: number; pageSize: number; searchQuery: string }
    >({
      query: (params) => {
        if (params) {
          const { page, pageSize, searchQuery } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/queue/?${queryString}`;
        }
        return 'queue';
      },
    }),
    addAppointment: builder.mutation<AppointmentInterface, SelectedAppointmentInterface>({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getAppointment: builder.query<AppointmentInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getAppointmentByPatientID: builder.query<AppointmentInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getAppointmentsByPatientID: builder.query<PaginatedResponse<AppointmentInterface>,
      {id?: string, page: number; pageSize: number; searchQuery: string }

    >({
      query: (params) => {
        if (params) {
          const {
            id, page, pageSize, searchQuery,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/details/${id}/?${queryString}`;
        }
        return 'details';
      },
    }),
    getAppointmentDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
    }),
    updateAppointment: builder.mutation({
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
  useGetAppointmentsQuery, useAddAppointmentMutation, useGetAppointmentPatientQueueQuery,
  useGetAppointmentQuery, useUpdateAppointmentMutation, useGetAppointmentByPatientIDQuery,
  useDeleteAppointmentMutation, useGetAppointmentDetailByIDQuery,
  useGetAppointmentsByPatientIDQuery,
} = appointmentApi;
