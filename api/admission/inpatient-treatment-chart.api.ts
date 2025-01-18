import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InpatientTreatmentChartInterface, PaginatedResponse } from 'motherangela';

export const inpatientTreatmentChartApi = createApi({
  reducerPath: 'inpatientTreatmentChartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/admission-service/inpatient-treatment-chart`,
  }),
  endpoints: (builder) => ({
    getAllInpatientTreatmentCharts: builder.query<
    PaginatedResponse<InpatientTreatmentChartInterface>,
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
    addInpatientTreatmentChart: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getInpatientTreatmentChart: builder.query<InpatientTreatmentChartInterface, string>({
      query: (id) => `detail/${id}`,
    }),

    getInpatientTreatmentChartsByPatientID: builder.query<PaginatedResponse<
    InpatientTreatmentChartInterface>,
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
    updateInpatientTreatmentChart: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInpatientTreatmentChart: builder.mutation({
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
  useGetAllInpatientTreatmentChartsQuery, useAddInpatientTreatmentChartMutation,
  useGetInpatientTreatmentChartQuery, useUpdateInpatientTreatmentChartMutation,
  useDeleteInpatientTreatmentChartMutation, useGetInpatientTreatmentChartsByPatientIDQuery,
} = inpatientTreatmentChartApi;
