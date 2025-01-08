import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const insuranceServiceCostMappingApi = createApi({
  reducerPath: 'insuranceServiceCostMappingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/root-server/insurance-service-cost-mapping`,

  }),
  endpoints: (builder) => ({
    getAllInsuranceServiceCostMapping: builder.query({
      query: () => 'fetchAll',
    }),
    addInsuranceServiceCostMapping: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getInsuranceServiceCostMapping: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateInsuranceServiceCostMapping: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteInsuranceServiceCostMapping: builder.mutation({
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
  useGetAllInsuranceServiceCostMappingQuery,
  useAddInsuranceServiceCostMappingMutation,
  useGetInsuranceServiceCostMappingQuery,
  useUpdateInsuranceServiceCostMappingMutation,
  useDeleteInsuranceServiceCostMappingMutation,
} = insuranceServiceCostMappingApi;
