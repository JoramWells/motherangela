import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InpatientPhysiotherapistVisitsInterface, PaginatedResponse } from 'motherangela';

export const inpatientPhysiotherapistVisitsApi = createApi({
  reducerPath: 'inpatientPhysiotherapistVisitsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/admission-service/inpatient-physiotherapist-visits`,
  }),
  endpoints: (builder) => ({
    getAllInpatientPhysiotherapistVisits: builder.query<
    PaginatedResponse<InpatientPhysiotherapistVisitsInterface>,
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
    addInpatientPhysiotherapistVisits: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getInpatientPhysiotherapistVisits: builder.query<InpatientPhysiotherapistVisitsInterface,
    string>({
      query: (id) => `detail/${id}`,
    }),

    getInpatientPhysiotherapistVisitsByPatientID: builder.query<PaginatedResponse<
    InpatientPhysiotherapistVisitsInterface>,
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
    updateInpatientPhysiotherapistVisits: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInpatientPhysiotherapistVisits: builder.mutation({
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
  useGetAllInpatientPhysiotherapistVisitsQuery, useAddInpatientPhysiotherapistVisitsMutation,
  useGetInpatientPhysiotherapistVisitsQuery, useUpdateInpatientPhysiotherapistVisitsMutation,
  useDeleteInpatientPhysiotherapistVisitsMutation,
  useGetInpatientPhysiotherapistVisitsByPatientIDQuery,
} = inpatientPhysiotherapistVisitsApi;
