import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResultStatusInterface, PaginatedResponse } from 'motherangela';

export const resultStatusApi = createApi({
  reducerPath: 'resultStatusApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/lab-service/result-status`,

  }),
  endpoints: (builder) => ({
    getAllResultStatus: builder.query<
      PaginatedResponse<ResultStatusInterface>,
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
    getAllRecentResultStatus: builder.query<
      PaginatedResponse<ResultStatusInterface>,
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
    addResultStatus: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getResultStatus: builder.query<ResultStatusInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    updateResultStatus: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteResultStatus: builder.mutation({
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
  useGetAllResultStatusQuery, useAddResultStatusMutation,
  useGetResultStatusQuery, useUpdateResultStatusMutation,
  useDeleteResultStatusMutation, useGetAllRecentResultStatusQuery,
} = resultStatusApi;
