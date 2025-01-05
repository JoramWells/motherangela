import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const consultationTypeSubGroupApi = createApi({
  reducerPath: 'consultationTypeSubGroupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5010/consultation-type-sub-groups',
  }),
  endpoints: (builder) => ({
    getAllConsultationTypeSubGroups: builder.query({
      query: () => 'fetchAll',
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
