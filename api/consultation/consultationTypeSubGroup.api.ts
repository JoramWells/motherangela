import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ConsultationTypesSubGroupInterface, PaginatedResponse } from 'motherangela';

export const consultationTypeSubGroupApi = createApi({
  reducerPath: 'consultationTypeSubGroupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/accounts-service/consultation-type-sub-groups`,

  }),
  endpoints: (builder) => ({
    getAllConsultationTypeSubGroups: builder.query<
              PaginatedResponse<ConsultationTypesSubGroupInterface>,
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
    addConsultationTypeSubGroup: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getConsultationTypeSubGroup: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateConsultationTypeSubGroup: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteConsultationTypeSubGroup: builder.mutation({
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
  useGetAllConsultationTypeSubGroupsQuery, useAddConsultationTypeSubGroupMutation,
  useGetConsultationTypeSubGroupQuery,
  useUpdateConsultationTypeSubGroupMutation, useDeleteConsultationTypeSubGroupMutation,
} = consultationTypeSubGroupApi;
