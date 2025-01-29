import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, ServiceTypeInterface } from 'motherangela';

export const serviceTypeApi = createApi({
  reducerPath: 'serviceTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/lab-service/service-types`,

  }),
  endpoints: (builder) => ({

    getAllServiceType: builder.query<PaginatedResponse<ServiceTypeInterface>,
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
    addServiceType: builder.mutation({
      query: (newData) => ({
        url: 'add',
        method: 'POST',
        body: newData,
      }),
    }),
    getServiceType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateServiceType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteServiceType: builder.mutation({
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
  useGetAllServiceTypeQuery, useAddServiceTypeMutation, useGetServiceTypeQuery,
  useUpdateServiceTypeMutation, useDeleteServiceTypeMutation,
} = serviceTypeApi;
