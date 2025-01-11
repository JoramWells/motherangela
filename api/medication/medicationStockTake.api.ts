import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MedicationStockTakeInterface, PaginatedResponse } from 'motherangela';

export const medicineStockTakeApi = createApi({
  reducerPath: 'medicineStockTakeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacy-service/medication-stock-take`,
  }),
  endpoints: (builder) => ({
    getAllMedicineStockTake: builder.query<
      PaginatedResponse<MedicationStockTakeInterface>,
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
    addMedicineStockTake: builder.mutation({
      query: (newMedicine) => ({
        url: 'add',
        method: 'POST',
        body: newMedicine,
      }),
    }),
    getMedicineStockTake: builder.query<MedicationStockTakeInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    getMedicineStockTakeDetails: builder.query<MedicationStockTakeInterface[], string>({
      query: (id) => `details/${id}`,
    }),
    getMedicineStockTakeSeries: builder.query({
      query: () => 'stock-take-series',
    }),
    updateMedicineStockTake: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteMedicineStockTake: builder.mutation({
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
  useGetAllMedicineStockTakeQuery, useAddMedicineStockTakeMutation,
  useGetMedicineStockTakeQuery, useGetMedicineStockTakeDetailsQuery,
  useUpdateMedicineStockTakeMutation, useDeleteMedicineStockTakeMutation,
  useGetMedicineStockTakeSeriesQuery,
} = medicineStockTakeApi;
