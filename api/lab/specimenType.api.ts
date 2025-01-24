import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SpecimenTypeInterface, PaginatedResponse } from 'motherangela';

export const specimenTypeApi = createApi({
  reducerPath: 'specimenTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/lab-service/specimen-type`,

  }),
  endpoints: (builder) => ({
    getAllSpecimenTypes: builder.query<
      PaginatedResponse<SpecimenTypeInterface>,
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
    getAllRecentSpecimenTypes: builder.query<
      PaginatedResponse<SpecimenTypeInterface>,
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
    addSpecimenType: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getSpecimenType: builder.query<SpecimenTypeInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    updateSpecimenType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteSpecimenType: builder.mutation({
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
  useGetAllSpecimenTypesQuery, useAddSpecimenTypeMutation,
  useGetSpecimenTypeQuery, useUpdateSpecimenTypeMutation,
  useDeleteSpecimenTypeMutation, useGetAllRecentSpecimenTypesQuery,
} = specimenTypeApi;
