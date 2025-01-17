import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MedicineInterface, PaginatedResponse } from 'motherangela';

export const medicineApi = createApi({
  reducerPath: 'medicineApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacy-service/medication`,
  }),
  endpoints: (builder) => ({
    getAllMedication: builder.query<
      PaginatedResponse<MedicineInterface>,
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
    addMedication: builder.mutation({
      query: (newMedication) => ({
        url: 'add',
        method: 'POST',
        body: newMedication,
      }),
    }),
    getMedication: builder.query<MedicineInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    searchMedicine: builder.query<MedicineInterface[],
          { searchQuery: string }

        >({
          query: (params) => {
            if (params) {
              const { searchQuery } = params;
              let queryString = '';
              queryString += `searchQuery=${searchQuery}`;
              return `/search/?${queryString}`;
            }
            return 'search';
          },
        }),
    updateMedication: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedication: builder.mutation({
      query(id) {
        return {
          url: `delete${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetAllMedicationQuery, useAddMedicationMutation, useGetMedicationQuery,
  useUpdateMedicationMutation, useDeleteMedicationMutation, useSearchMedicineQuery,
} = medicineApi;
