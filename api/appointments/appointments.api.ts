import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentApi = createApi({
  reducerPath: "appointmentsApi",
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
          let queryString = "";
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/fetchAll/?${queryString}`;
        }
        return "fetchAll";
      },
    }),
    addAppointment: builder.mutation({
      query: (newWard) => ({
        url: "add",
        method: "POST",
        body: newWard,
      }),
    }),
    getAppointment: builder.query<AppointmentInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getAppointmentDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
    }),
    updateAppointment: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    deleteAppointment: builder.mutation({
      query(id) {
        return {
          url: `delete/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAppointmentsQuery, useAddAppointmentMutation,
  useGetAppointmentQuery, useUpdateAppointmentMutation,
  useDeleteAppointmentMutation, useGetAppointmentDetailByIDQuery,
} = appointmentApi;
