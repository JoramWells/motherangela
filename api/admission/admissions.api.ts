import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AdmissionInterface, PaginatedResponse } from 'motherangela';

export const admissionApi = createApi({
  reducerPath: 'admissionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/admission-service/admission`,
  }),
  endpoints: (builder) => ({
    getAllAdmissions: builder.query<PaginatedResponse<AdmissionInterface>,
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
    addAdmission: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getAdmission: builder.query<AdmissionInterface, string>({
      query: (id) => `detail/${id}`,
    }),

    getAdmissionsByPatientID: builder.query<PaginatedResponse<AdmissionInterface>,
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
    updateAdmission: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAdmission: builder.mutation({
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
  useGetAllAdmissionsQuery, useAddAdmissionMutation,
  useGetAdmissionQuery, useUpdateAdmissionMutation,
  useDeleteAdmissionMutation, useGetAdmissionsByPatientIDQuery,
} = admissionApi;
