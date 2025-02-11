import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MaternityVisitsInterface, PaginatedResponse } from 'motherangela';

export const maternityVisitsApi = createApi({
  reducerPath: 'maternityVisitsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-visits`,
  }),
  endpoints: (builder) => ({
    getAllMaternityVisits: builder.query<PaginatedResponse<MaternityVisitsInterface>,
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

    addMaternityVisits: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getMaternityVisits: builder.query<MaternityVisitsInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
    getMaternityVisitsByMaternityID: builder.query<MaternityVisitsInterface, string>({
      query: (id) => `/by-maternity-id/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityVisitsQuery,
  useAddMaternityVisitsMutation, useGetMaternityVisitsQuery,
  useGetMaternityVisitsByMaternityIDQuery,
} = maternityVisitsApi;
