import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MedicineCategoryInterface, PaginatedResponse } from 'motherangela';

export const medicineCategoryApi = createApi({
  reducerPath: 'medicineCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacy-service/medication-category`,
  }),
  endpoints: (builder) => ({
    getAllMedicineCategory: builder.query<
      PaginatedResponse<MedicineCategoryInterface>,
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
    addMedicineCategory: builder.mutation({
      query: (newMedicine) => ({
        url: 'add',
        method: 'POST',
        body: newMedicine,
      }),
    }),
    getMedicineCategory: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedicineCategory: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedicineCategory: builder.mutation({
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
  useGetAllMedicineCategoryQuery, useAddMedicineCategoryMutation, useGetMedicineCategoryQuery,
  useUpdateMedicineCategoryMutation, useDeleteMedicineCategoryMutation,
} = medicineCategoryApi;
