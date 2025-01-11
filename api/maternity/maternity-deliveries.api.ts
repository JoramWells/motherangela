import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MaternityDeliveryInterface, PaginatedResponse } from 'motherangela';

export const maternityDeliveriesApi = createApi({
  reducerPath: 'maternityDeliveriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-deliveries`,
  }),
  endpoints: (builder) => ({
    getAllMaternityDeliveries: builder.query<PaginatedResponse<MaternityDeliveryInterface>,
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

    addMaternityDelivery: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getMaternityDelivery: builder.query<MaternityDeliveryInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityDeliveriesQuery,
  useAddMaternityDeliveryMutation, useGetMaternityDeliveryQuery,
} = maternityDeliveriesApi;
