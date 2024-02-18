import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serviceTypeApi = createApi({
  reducerPath: 'serviceTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5010/service-types',
  }),
  endpoints: (builder) => ({
    getAllServiceType: builder.query({
      query: () => 'fetchAll',
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
