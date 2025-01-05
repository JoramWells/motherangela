import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const consultationTypeGroupApi = createApi({
  reducerPath: 'consultationTypeGroupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/consultation-type-groups`,

  }),
  endpoints: (builder) => ({
    getAllConsultationTypeGroups: builder.query({
      query: () => 'fetchAll',
    }),
    addConsultationTypeGroup: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getConsultationTypeGroup: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateConsultationTypeGroup: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteConsultationTypeGroup: builder.mutation({
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
  useGetAllConsultationTypeGroupsQuery, useAddConsultationTypeGroupMutation,
  useGetConsultationTypeGroupQuery,
  useUpdateConsultationTypeGroupMutation, useDeleteConsultationTypeGroupMutation,
} = consultationTypeGroupApi;
