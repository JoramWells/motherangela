import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, PeopleRelationsInterface } from 'motherangela';

export const peopleRelationsApi = createApi({
  reducerPath: 'peopleRelationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/people-relations`,
  }),
  endpoints: (builder) => ({
    getAllPeopleRelations: builder.query<PaginatedResponse<PeopleRelationsInterface>,
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

    addPeopleRelations: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getPeopleRelations: builder.query<PeopleRelationsInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
    getPeopleRelationsByMaternityID: builder.query<PeopleRelationsInterface, string>({
      query: (id) => `/by-maternity-id/${id}`,
    }),
  }),
});

export const {
  useGetAllPeopleRelationsQuery,
  useAddPeopleRelationsMutation, useGetPeopleRelationsQuery,
  useGetPeopleRelationsByMaternityIDQuery,
} = peopleRelationsApi;
