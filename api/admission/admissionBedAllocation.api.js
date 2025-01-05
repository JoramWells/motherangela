import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const admissionBedAllocationApi = createApi({
  reducerPath: 'admissionBedAllocationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5009/bed-allocation',
  }),
  endpoints: (builder) => ({
    getAllAdmissionBedAllocation: builder.query({
      query: () => 'fetchAll',
    }),
    addAdmissionBedAllocation: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getAdmissionBedAllocation: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getAdmissionBedAllocationDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
    }),
    updateAdmissionBedAllocation: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAdmissionBedAllocation: builder.mutation({
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
  useGetAllAdmissionBedAllocationQuery, useAddAdmissionBedAllocationMutation,
  useGetAdmissionBedAllocationQuery, useUpdateAdmissionBedAllocationMutation,
  useDeleteAdmissionBedAllocationMutation, useGetAdmissionBedAllocationDetailByIDQuery,
} = admissionBedAllocationApi;
