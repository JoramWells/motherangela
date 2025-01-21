import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InsuranceInterface, PaginatedResponse } from 'motherangela';

export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/company`,

  }),
  endpoints: (builder) => ({

    getAllCompanies: builder.query<PaginatedResponse<InsuranceInterface>,
          { page: number; pageSize: number; searchQuery: string }

        >({
          query: (params) => {
            if (params) {
              const { page, pageSize, searchQuery } = params;
              let queryString = '';
              queryString += `page=${page}`;
              queryString += `&pageSize=${pageSize}`;
              queryString += `&searchQuery=${searchQuery}`;
              return `/fetchAll/?${queryString}`;
            }
            return 'fetchAll';
          },
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
