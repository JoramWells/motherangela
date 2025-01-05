import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const internalPharmacyRequestApi = createApi({
  reducerPath: 'internalPharmacyRequestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/pharmacy-service/internal-pharmacy-request`,

  }),
  endpoints: (builder) => ({
    getAllInternalPharmacyRequests: builder.query({
      query: () => 'fetchAll',
    }),
    addInternalPharmacyRequest: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getInternalPharmacyRequest: builder.query({
      query: (id) => `detail/${id}`,
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
} = internalPharmacyRequestApi;
