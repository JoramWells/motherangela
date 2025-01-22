import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InpatientDoctorVisitsDoctor, PaginatedResponse } from 'motherangela';

export const inpatientDoctorVisitsApi = createApi({
  reducerPath: 'inpatientDoctorVisitsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/admission-service/inpatient-doctor-visits`,
  }),
  endpoints: (builder) => ({
    getAllInpatientDoctorVisits: builder.query<
    PaginatedResponse<InpatientDoctorVisitsDoctor>,
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
    addInpatientDoctorVisits: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getInpatientDoctorVisits: builder.query<InpatientDoctorVisitsDoctor, string>({
      query: (id) => `detail/${id}`,
    }),

    getInpatientDoctorVisitsByPatientID: builder.query<PaginatedResponse<
    InpatientDoctorVisitsDoctor>,
         {id?: string, patient_id?: string, page: number; pageSize: number; searchQuery: string }

       >({
         query: (params) => {
           if (params) {
             const {
               id, page, pageSize, searchQuery, patient_id,
             } = params;
             let queryString = '';
             queryString += `page=${page}`;
             queryString += `&pageSize=${pageSize}`;
             queryString += `&patient_id=${patient_id}`;
             queryString += `&searchQuery=${searchQuery}`;
             return `/by-patient-id/${id}/?${queryString}`;
           }
           return 'details';
         },
       }),
    updateInpatientDoctorVisits: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInpatientDoctorVisits: builder.mutation({
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
  useGetAllInpatientDoctorVisitsQuery, useAddInpatientDoctorVisitsMutation,
  useGetInpatientDoctorVisitsQuery, useUpdateInpatientDoctorVisitsMutation,
  useDeleteInpatientDoctorVisitsMutation, useGetInpatientDoctorVisitsByPatientIDQuery,
} = inpatientDoctorVisitsApi;
