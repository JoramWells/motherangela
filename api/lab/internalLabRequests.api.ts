import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InternalLabRequestInterface, PaginatedResponse } from 'motherangela';

export const internalLabRequestsApi = createApi({
  reducerPath: 'internalLabRequestsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/lab-service/internal-lab-requests`,

  }),
  endpoints: (builder) => ({
    getAllInternalLabRequests: builder.query<
      PaginatedResponse<InternalLabRequestInterface>,
      { page: number; pageSize: number; searchQuery: string, date?:string }
    >({
      query: (params) => {
        if (params) {
          const {
            page, pageSize, searchQuery, date,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&date=${date}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/fetchAll/?${queryString}`;
        }
        return 'fetchAll';
      },
    }),
    getAllInternalLabRequestsByAppointmentID: builder.query<
      PaginatedResponse<InternalLabRequestInterface>,
      {id?:string, page: number; pageSize: number; searchQuery: string }
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
          return `/by-appointment-id/${id}?${queryString}`;
        }
        return 'by-appointment-id';
      },
    }),
    getAllRecentInternalLabRequests: builder.query<
      PaginatedResponse<InternalLabRequestInterface>,
      { page: number; pageSize: number; searchQuery: string, date?:string }
    >({
      query: (params) => {
        if (params) {
          const {
            page, pageSize, searchQuery, date,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&date=${date}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/requests/?${queryString}`;
        }
        return 'requests';
      },
    }),
    addInternalLabRequest: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getInternalLabRequest: builder.query<InternalLabRequestInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    updateInternalLabRequest: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    updateInternalLabRequestCollectSample: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update-collected-sample/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInternalLabRequest: builder.mutation({
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
  useGetAllInternalLabRequestsQuery, useAddInternalLabRequestMutation,
  useGetInternalLabRequestQuery, useUpdateInternalLabRequestMutation,
  useDeleteInternalLabRequestMutation, useGetAllRecentInternalLabRequestsQuery,
  useUpdateInternalLabRequestCollectSampleMutation,
  useGetAllInternalLabRequestsByAppointmentIDQuery,
} = internalLabRequestsApi;
