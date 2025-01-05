import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const consultationTypeApi = createApi({
  reducerPath: 'consultationTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/consultation-type`,

  }),
  endpoints: (builder) => ({
    getAllConsultationTypes: builder.query({
      query: () => 'fetchAll',
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
