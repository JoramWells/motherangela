import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const admissionCategoryApi = createApi({
  reducerPath: 'admissionCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5009/admission-category',
  }),
  endpoints: (builder) => ({
    getAllAdmissionCategories: builder.query({
      query: () => 'fetchAll',
    }),
    addAdmissionCategory: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getAdmissionCategory: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getAdmissionCategoryDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
    }),
    updateAdmissionCategory: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAdmissionCategory: builder.mutation({
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
  useGetAllAdmissionCategoriesQuery, useAddAdmissionCategoryMutation,
  useGetAdmissionCategoryQuery, useUpdateAdmissionCategoryMutation,
  useDeleteAdmissionCategoryMutation, useGetAdmissionCategoryDetailByIDQuery,
} = admissionCategoryApi;
