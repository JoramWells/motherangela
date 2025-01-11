import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MedicinePurchaseInterface, PaginatedResponse } from 'motherangela';

export const medicinePurchasesApi = createApi({
  reducerPath: 'medicinePurchasesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacy-service/medication-purchase`,
  }),
  endpoints: (builder) => ({
    getAllMedicinePurchases: builder.query<
      PaginatedResponse<MedicinePurchaseInterface>,
      { page: number; pageSize: number; searchQuery: string }
    >({
      query: (params) => {
        if (params) {
          const {
            page,
            pageSize,
            searchQuery,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/fetchAll/?${queryString}`;
        }
        return 'fetchAll';
      },
    }),
    addMedicinePurchases: builder.mutation({
      query: (newMedicine) => ({
        url: 'add',
        method: 'POST',
        body: newMedicine,
      }),
    }),
    getMedicinePurchases: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedicinePurchases: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedicinePurchases: builder.mutation({
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
  useGetAllMedicinePurchasesQuery, useAddMedicinePurchasesMutation,
  useGetMedicinePurchasesQuery,
  useUpdateMedicinePurchasesMutation, useDeleteMedicinePurchasesMutation,
} = medicinePurchasesApi;
