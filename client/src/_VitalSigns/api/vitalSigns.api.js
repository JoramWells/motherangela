import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vitalSignsApi = createApi({
  reducerPath: 'vitalSignsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5006/vital-signs',
  }),
  endpoints: (builder) => ({
    getAllVitalSigns: builder.query({
      query: () => 'fetchAll',
    }),
    addVitalSigns: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getVitalSigns: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getVitalSignsDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
    }),
    updateVitalSigns: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteVitalSigns: builder.mutation({
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
  useGetAllVitalSignsQuery, useAddVitalSignsMutation,
  useGetVitalSignsQuery, useUpdateVitalSignsMutation,
  useDeleteVitalSignsMutation, useGetVitalSignsDetailByIDQuery,
} = vitalSignsApi;
