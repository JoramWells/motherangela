import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, ReferralTypesInterface } from 'motherangela';

export const referralTypeApi = createApi({
  reducerPath: 'referralTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/appointment-service/referral-types`,
  }),
  endpoints: (builder) => ({
    getAllReferralTypes: builder.query<
      PaginatedResponse<ReferralTypesInterface>,
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
    addReferralType: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
    getReferralType: builder.query<ReferralTypesInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getReferralTypesByPatientID: builder.query<PaginatedResponse<ReferralTypesInterface>,
      {id?: string, page: number; pageSize: number; searchQuery: string }

    >({
      query: (params) => {
        if (params) {
          const {
            id, page, pageSize, searchQuery,
          } = params;
          let queryString = '';
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/details/${id}/?${queryString}`;
        }
        return 'details';
      },
    }),
    getReferralTypeDetailByID: builder.query({
      query: (id) => `detailAll/${id}`,
    }),
    updateReferralType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `edit/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteReferralType: builder.mutation({
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
  useGetAllReferralTypesQuery, useAddReferralTypeMutation,
  useGetReferralTypeQuery, useUpdateReferralTypeMutation,
  useDeleteReferralTypeMutation, useGetReferralTypeDetailByIDQuery,
  useGetReferralTypesByPatientIDQuery,
} = referralTypeApi;
