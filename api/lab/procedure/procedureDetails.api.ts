import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, ProcedureInterface } from 'motherangela';

export const procedureApi = createApi({
  reducerPath: 'procedureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/lab-service/procedure-details`,

  }),
  endpoints: (builder) => ({
    getAllProcedures: builder.query<
          PaginatedResponse<ProcedureInterface>,
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
    addProcedure: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getProcedure: builder.query({
      query: (id) => `/${id}`,
    }),
    searchProcedure: builder.query<ProcedureInterface[],
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
  useGetAllProceduresQuery, useAddProcedureMutation,
  useGetProcedureQuery, useSearchProcedureQuery,
} = procedureApi;
