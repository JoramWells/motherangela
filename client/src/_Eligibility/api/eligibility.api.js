import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eligibilityApi = createApi({
  reducerPath: 'eligibilityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5008/eligibility',
  }),
  endpoints: (builder) => ({
    getAllEligibility: builder.query({
      query: () => 'fetchAll',
    }),
    addEligibility: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getEligibility: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateEligibility: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteEligibility: builder.mutation({
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
  useGetAllEligibilityQuery, useAddEligibilityMutation,
  useGetEligibilityQuery,
  useUpdateEligibilityMutation, useDeleteEligibilityMutation,
} = eligibilityApi;
