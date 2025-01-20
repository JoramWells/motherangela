import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ConsultationTypeInterface, PaginatedResponse } from 'motherangela';

export const consultationTypeApi = createApi({
  reducerPath: 'consultationTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/consultation-type`,

  }),
  endpoints: (builder) => ({
    getAllConsultationTypes: builder.query<
              PaginatedResponse<ConsultationTypeInterface>,
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
    addConsultationType: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getConsultationType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateConsultationType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteConsultationType: builder.mutation({
      query(id) {
        return {
          url: `delete${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetAllConsultationTypesQuery, useAddConsultationTypeMutation, useGetConsultationTypeQuery,
  useUpdateConsultationTypeMutation, useDeleteConsultationTypeMutation,
} = consultationTypeApi;
