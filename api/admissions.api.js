import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const admissionApi = createApi({
  reducerPath: 'admissionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/admission-service/admission`,

  }),
  endpoints: (builder) => ({
    getAllAdmissions: builder.query({
      query: () => 'fetchAll',
    }),
    addAdmission: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getAdmission: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getAdmissionDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
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
  useDeleteAdmissionMutation, useGetAdmissionDetailByIDQuery,
} = admissionApi;
