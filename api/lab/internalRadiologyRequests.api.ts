import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InternalRadiologyRequestInterface, PaginatedResponse } from 'motherangela';

export const internalRadiologyRequestsApi = createApi({
  reducerPath: 'internalRadiologyRequestsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/Radiology-service/internal-radiology-requests`,

  }),
  endpoints: (builder) => ({
    getAllInternalRadiologyRequests: builder.query<
      PaginatedResponse<InternalRadiologyRequestInterface>,
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
    getAllInternalRadiologyRequestsByAppointmentID: builder.query<
      PaginatedResponse<InternalRadiologyRequestInterface>,
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
    getAllRecentInternalRadiologyRequests: builder.query<
      PaginatedResponse<InternalRadiologyRequestInterface>,
      { page: number; pageSize: number; searchQuery: string }
    >({
      query: (params) => {
        if (params) {
          const { page, pageSize, searchQuery } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/requests/?${queryString}`;
        }
        return 'requests';
      },
    }),
    addInternalRadiologyRequest: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getInternalRadiologyRequest: builder.query<InternalRadiologyRequestInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    updateInternalRadiologyRequest: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    updateInternalRadiologyRequestCollectSample: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update-collected-sample/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInternalRadiologyRequest: builder.mutation({
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
  useGetAllInternalRadiologyRequestsQuery, useAddInternalRadiologyRequestMutation,
  useGetInternalRadiologyRequestQuery, useUpdateInternalRadiologyRequestMutation,
  useDeleteInternalRadiologyRequestMutation, useGetAllRecentInternalRadiologyRequestsQuery,
  useUpdateInternalRadiologyRequestCollectSampleMutation,
  useGetAllInternalRadiologyRequestsByAppointmentIDQuery,
} = internalRadiologyRequestsApi;
