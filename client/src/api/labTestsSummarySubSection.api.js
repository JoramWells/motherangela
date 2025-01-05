import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const labTestsSummarySubSectionApi = createApi({
  reducerPath: 'labTestsSummarySubSectionApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:5000/lab-tests-summary-sub-section',
    baseUrl: `${process.env.REACT_APP_API_URL}/api/lab-service/lab-tests-summary-sub-section`,

  }),
  endpoints: (builder) => ({
    getAllLabTestsSummarySubSection: builder.query({
      query: () => 'fetchAll',
    }),
    addLabTestsSummarySubSection: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getLabTestsSummarySubSection: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateLabTestsSummarySubSection: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteLabTestsSummarySubSection: builder.mutation({
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
  useGetAllLabTestsSummarySubSectionQuery, useAddLabTestsSummarySubSectionMutation,
  useGetLabTestsSummarySubSectionQuery, useUpdateLabTestsSummarySubSectionMutation,
  useDeleteLabTestsSummarySubSectionMutation,
} = labTestsSummarySubSectionApi;
