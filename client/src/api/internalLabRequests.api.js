import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const internalLabRequestsApi = createApi({
  reducerPath: 'internalLabRequestsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5005/internal-lab-requests',
  }),
  endpoints: (builder) => ({
    getAllInternalLabRequests: builder.query({
      query: () => 'fetchAll',
    }),
    addInternalLabRequest: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getInternalLabRequest: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateInternalLabRequest: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInternalLabRequest: builder.mutation({
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
  useGetAllInternalLabRequestsQuery, useAddInternalLabRequestMutation,
  useGetInternalLabRequestQuery, useUpdateInternalLabRequestMutation,
  useDeleteInternalLabRequestMutation,
} = internalLabRequestsApi;
