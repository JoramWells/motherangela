import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InpatientNurseVisitsInterface, PaginatedResponse } from 'motherangela';

export const inpatientNurseVisitsApi = createApi({
  reducerPath: 'inpatientNurseVisitsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/admission-service/inpatient-nurse-visits`,
  }),
  endpoints: (builder) => ({
    getAllInpatientNurseVisits: builder.query<
    PaginatedResponse<InpatientNurseVisitsInterface>,
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
    addInpatientNurseVisits: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getInpatientNurseVisits: builder.query<InpatientNurseVisitsInterface, string>({
      query: (id) => `detail/${id}`,
    }),

    getInpatientNurseVisitsByPatientID: builder.query<PaginatedResponse<
    InpatientNurseVisitsInterface>,
         {id?: string, patient_id: string, page: number; pageSize: number; searchQuery: string }

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
    updateInpatientNurseVisits: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInpatientNurseVisits: builder.mutation({
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
  useGetAllInpatientNurseVisitsQuery, useAddInpatientNurseVisitsMutation,
  useGetInpatientNurseVisitsQuery, useUpdateInpatientNurseVisitsMutation,
  useDeleteInpatientNurseVisitsMutation, useGetInpatientNurseVisitsByPatientIDQuery,
} = inpatientNurseVisitsApi;
