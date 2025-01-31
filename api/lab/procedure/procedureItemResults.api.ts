import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, ProcedureItemResultsInterface } from 'motherangela';

export const procedureItemResultsApi = createApi({
  reducerPath: 'procedureItemResultsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/lab-service/procedure-item-results`,
  }),
  endpoints: (builder) => ({
    getAllProcedureItemResults: builder.query<
              PaginatedResponse<ProcedureItemResultsInterface>,
              { page: number; pageSize: number; searchQuery: string }
            >({
              query: (params) => {
                if (params) {
                  const {
                    page, pageSize, searchQuery,
                  } = params;
                  let queryString = '';
                  queryString += `page=${page}`;
                  queryString += `&pageSize=${pageSize}`;
                  queryString += `&searchQuery=${searchQuery}`;
                  return `/fetchAll/?${queryString}`;
                }
                return 'fetchAll';
              },
            }),
    addProcedureItemResult: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getProcedureItemResult: builder.query({
      query: (id) => `detail/${id}`,
    }),
    getProcedureItemResultByLabReqID: builder.query({
      query: (id) => `by-lab-req-id/${id}`,
    }),
    updateProcedureItemResult: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteProcedureItemResult: builder.mutation({
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
  useGetAllProcedureItemResultsQuery, useAddProcedureItemResultMutation,
  useGetProcedureItemResultQuery, useUpdateProcedureItemResultMutation,
  useDeleteProcedureItemResultMutation, useGetProcedureItemResultByLabReqIDQuery,
} = procedureItemResultsApi;
