import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const medicineStockTakeApi = createApi({
  reducerPath: "medicineStockTakeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/root-server/medication-stock-take`,
  }),
  endpoints: (builder) => ({
    getAllMedicineStockTake: builder.query<
      PaginatedResponse<MedicineStockInterface>,
      { page: number; pageSize: number; searchQuery: string }
    >({
      query: (params) => {
        if (params) {
          const { page, pageSize, searchQuery } = params;
          let queryString = "";
          queryString += `page=${page}`;
          queryString += `&pageSize=${pageSize}`;
          queryString += `&searchQuery=${searchQuery}`;
          return `/fetchAll/?${queryString}`;
        }
        return "fetchAll";
      },
    }),
    addMedicineStockTake: builder.mutation({
      query: (newMedicine) => ({
        url: "add",
        method: "POST",
        body: newMedicine,
      }),
    }),
    getMedicineStockTake: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateMedicineStockTake: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    deleteMedicineStockTake: builder.mutation({
      query(id) {
        return {
          url: `delete${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllMedicineStockTakeQuery, useAddMedicineStockTakeMutation,
  useGetMedicineStockTakeQuery,
  useUpdateMedicineStockTakeMutation, useDeleteMedicineStockTakeMutation,
} = medicineStockTakeApi;
