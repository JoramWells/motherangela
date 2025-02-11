import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MaternityPhysicalExaminationInterface, PaginatedResponse } from 'motherangela';

export const maternityPhysicalExaminationApi = createApi({
  reducerPath: 'maternityPhysicalExaminationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-physical-examination`,
  }),
  endpoints: (builder) => ({
    getAllMaternityPhysicalExamination:
    builder.query<PaginatedResponse<MaternityPhysicalExaminationInterface>,
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

    addMaternityPhysicalExamination: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getMaternityPhysicalExamination: builder.query<MaternityPhysicalExaminationInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
    getMaternityPhysicalExaminationByMaternityID:
    builder.query<MaternityPhysicalExaminationInterface, string>({
      query: (id) => `/by-maternity-id/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityPhysicalExaminationQuery,
  useAddMaternityPhysicalExaminationMutation, useGetMaternityPhysicalExaminationQuery,
  useGetMaternityPhysicalExaminationByMaternityIDQuery,
} = maternityPhysicalExaminationApi;
