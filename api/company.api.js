import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/company',
  }),
  endpoints: (builder) => ({
    getAllCompanies: builder.query({
      query: () => 'fetchAll',
    }),
    addCompany: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getCompany: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateCompany: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteCompany: builder.mutation({
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
  useGetAllCompaniesQuery, useAddCompanyMutation, useGetCompanyQuery,
  useUpdateCompanyMutation, useDeleteCompanyMutation,
} = companyApi;
