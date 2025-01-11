import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MaternityProfileInterface, PaginatedResponse } from 'motherangela';

export const maternityProfileApi = createApi({
  reducerPath: 'maternityProfileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-profile`,
  }),
  endpoints: (builder) => ({
    getAllMaternityProfiles: builder.query<PaginatedResponse<MaternityProfileInterface>,
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

    addMaternityProfile: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getMaternityProfile: builder.query<MaternityProfileInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityProfilesQuery,
  useAddMaternityProfileMutation, useGetMaternityProfileQuery,
} = maternityProfileApi;
