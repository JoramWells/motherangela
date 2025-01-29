import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, ProcedureInterface } from 'motherangela';

export const procedureCategoryApi = createApi({
  reducerPath: 'procedureCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/lab-service/procedure-category`,

  }),
  endpoints: (builder) => ({
    getAllProcedureCategories: builder.query<
          PaginatedResponse<ProcedureInterface>,
          { page: number; pageSize: number; searchQuery: string, serviceType?:string }
        >({
          query: (params) => {
            if (params) {
              const {
                page, pageSize, searchQuery, serviceType,
              } = params;
              let queryString = '';
              queryString += `page=${page}`;
              queryString += `&pageSize=${pageSize}`;
              queryString += `&serviceType=${serviceType}`;
              queryString += `&searchQuery=${searchQuery}`;
              return `/fetchAll/?${queryString}`;
            }
            return 'fetchAll';
          },
        }),
    addProcedureCategory: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getProcedureCategory: builder.query({
      query: (id) => `/${id}`,
    }),
    searchProcedureCategory: builder.query<ProcedureInterface[],
          { searchQuery: string }

        >({
          query: (params) => {
            if (params) {
              const { searchQuery } = params;
              let queryString = '';
              queryString += `searchQuery=${searchQuery}`;
              return `/search/?${queryString}`;
            }
            return 'search';
          },
        }),
    updateProcedure: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteProcedure: builder.mutation({
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
  useGetAllProcedureCategoriesQuery, useAddProcedureCategoryMutation,
  useGetProcedureCategoryQuery, useSearchProcedureCategoryQuery,
} = procedureCategoryApi;
