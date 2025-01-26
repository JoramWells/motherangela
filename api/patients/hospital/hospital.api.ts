import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HospitalInterface, PaginatedResponse } from 'motherangela';

export const hospitalApi = createApi({
  reducerPath: 'hospitalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/hospital`,
  }),
  endpoints: (builder) => ({

    // Get Maternity Antenatal Profile
    getAllHospital: builder.query<PaginatedResponse<HospitalInterface>,
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
    addHospital: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getHospital: builder.query<HospitalInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
    getHospitalByMaternityID: builder.query<HospitalInterface, string>({
      query: (id) => `/by-maternity-id/${id}`,
    }),
  }),
});

export const {
  useGetAllHospitalQuery, useGetHospitalByMaternityIDQuery,
  useAddHospitalMutation, useGetHospitalQuery,
} = hospitalApi;
