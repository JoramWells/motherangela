import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, ResidenceDetailsInterface } from 'motherangela';

export const residenceDetailsApi = createApi({
  reducerPath: 'residenceDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/residence-details`,
  }),
  endpoints: (builder) => ({
    getAllResidenceDetails: builder.query<PaginatedResponse<ResidenceDetailsInterface>,
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

    addResidenceDetails: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getResidenceDetails: builder.query<ResidenceDetailsInterface, string>({
      query: (id) => `/detail/${id}`,
    }),

  }),
});

export const {
  useGetAllResidenceDetailsQuery,
  useAddResidenceDetailsMutation, useGetResidenceDetailsQuery,
} = residenceDetailsApi;
