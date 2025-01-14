import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AntenatalProfileInterface, PaginatedResponse } from 'motherangela';

export const maternityAntenatalProfileApi = createApi({
  reducerPath: 'maternityAntenatalProfileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-antenatal-profile`,
  }),
  endpoints: (builder) => ({

    // Get Maternity Antenatal Profile
    getAllMaternityAntenatalProfile: builder.query<PaginatedResponse<AntenatalProfileInterface>,
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
    addMaternityAntenatalProfile: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getAntenatalMaternityProfile: builder.query({
      query: (id) => `/detail/${id}`,
    }),
    getAntenatalMaternityProfileByMaternityID: builder.query<AntenatalProfileInterface, string>({
      query: (id) => `/by-maternity-id/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityAntenatalProfileQuery, useGetAntenatalMaternityProfileByMaternityIDQuery,
  useAddMaternityAntenatalProfileMutation, useGetAntenatalMaternityProfileQuery,
} = maternityAntenatalProfileApi;
