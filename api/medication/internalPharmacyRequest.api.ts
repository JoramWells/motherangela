import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InternalPharmacyRequestInterface, PaginatedResponse } from 'motherangela';

export const internalPharmacyRequestsApi = createApi({
  reducerPath: 'internalPharmacyRequestsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacy-service/internal-pharmacy-requests`,
  }),
  endpoints: (builder) => ({
    getAllInternalPharmacyRequests: builder.query<
      PaginatedResponse<InternalPharmacyRequestInterface>,
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
    addInternalPharmacyRequest: builder.mutation({
      query: (newMedicine) => ({
        url: 'add',
        method: 'POST',
        body: newMedicine,
      }),
    }),
    getInternalPharmacyRequest: builder.query<InternalPharmacyRequestInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getInternalPharmacyRequestSeries: builder.query({
      query: () => 'stock-take-series',
    }),
    updateInternalPharmacyRequest: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInternalPharmacyRequest: builder.mutation({
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
  useGetAllInternalPharmacyRequestsQuery, useAddInternalPharmacyRequestMutation,
  useGetInternalPharmacyRequestQuery,
  useUpdateInternalPharmacyRequestMutation, useDeleteInternalPharmacyRequestMutation,
  useGetInternalPharmacyRequestSeriesQuery,
} = internalPharmacyRequestsApi;
