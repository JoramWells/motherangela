import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DoctorNotesInterface, PaginatedResponse } from 'motherangela';

export const doctorNotesApi = createApi({
  reducerPath: 'doctorNotesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/procedure-service/doctor-notes`,
  }),
  endpoints: (builder) => ({

    // Get Maternity Antenatal Profile
    getAllDoctorNotes: builder.query<PaginatedResponse<DoctorNotesInterface>,
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
    addDoctorNotes: builder.mutation({
      query: (newMaternity) => ({
        url: 'add',
        method: 'POST',
        body: newMaternity,
      }),
    }),
    getDoctorNotes: builder.query<DoctorNotesInterface, string>({
      query: (id) => `/detail/${id}`,
    }),
    getDoctorNotesByMaternityID: builder.query<DoctorNotesInterface, string>({
      query: (id) => `/by-maternity-id/${id}`,
    }),
  }),
});

export const {
  useGetAllDoctorNotesQuery, useGetDoctorNotesByMaternityIDQuery,
  useAddDoctorNotesMutation, useGetDoctorNotesQuery,
} = doctorNotesApi;
