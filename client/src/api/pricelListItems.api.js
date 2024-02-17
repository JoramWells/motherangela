import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const priceListItemApi = createApi({
  reducerPath: 'priceListItemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/price-list-items',
  }),
  endpoints: (builder) => ({
    getAllPriceListItems: builder.query({
      query: () => 'fetchAll',
    }),
    addPriceListItem: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPriceListItem: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePriceListItem: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePriceListItem: builder.mutation({
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
  useGetAllPriceListItemsQuery, useAddPriceListItemMutation, useGetPriceListItemQuery,
  useUpdatePriceListItemMutation, useDeletePriceListItemMutation,
} = priceListItemApi;
