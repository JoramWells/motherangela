import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MaternityPostNatalExaminationInterface, PaginatedResponse } from 'motherangela';

export const maternityPostnatalExaminationApi = createApi({
  reducerPath: 'maternityPostnatalExaminationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/maternity-postnatal-examination`,
  }),
  endpoints: (builder) => ({
    getAllMaternityPostNatalExaminations:
    builder.query<PaginatedResponse<MaternityPostNatalExaminationInterface>,
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

    addMaternityPostNatalExamination: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getMaternityPostNatalExamination:
    builder.query<MaternityPostNatalExaminationInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
    getMaternityPostNatalExaminationByMaternityID:
    builder.query<MaternityPostNatalExaminationInterface, string>({
      query: (id) => `/by-maternity-id/${id}`,
    }),
  }),
});

export const {
  useGetAllMaternityPostNatalExaminationsQuery,
  useAddMaternityPostNatalExaminationMutation, useGetMaternityPostNatalExaminationQuery,
  useGetMaternityPostNatalExaminationByMaternityIDQuery,
} = maternityPostnatalExaminationApi;
