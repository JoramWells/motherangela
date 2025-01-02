import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const specimenTypeApi = createApi({
  reducerPath: 'specimenTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/lab-service/specimen-type`,

  }),
  endpoints: (builder) => ({
    getAllSpecimenTypes: builder.query({
      query: () => 'fetchAll',
    }),
    addSpecimenType: builder.mutation({
      query: (newCredit) => ({
        url: 'add',
        method: 'POST',
        body: newCredit,
      }),
    }),
    getSpecimenType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateSpecimenType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteSpecimenType: builder.mutation({
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
  useGetAllSpecimenTypesQuery, useAddSpecimenTypeMutation, useGetSpecimenTypeQuery,
  useUpdateSpecimenTypeMutation, useDeleteSpecimenTypeMutation,
} = specimenTypeApi;
