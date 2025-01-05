import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountTypeApi = createApi({
  reducerPath: 'accountTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/accounts-service/account-type`,

  }),
  endpoints: (builder) => ({
    getAllAccountTypes: builder.query({
      query: () => 'fetchAll',
    }),
    addAccountType: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getAccountType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateAccountType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteAccountType: builder.mutation({
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
  useGetAllAccountTypesQuery, useAddAccountTypeMutation,
  useGetAccountTypeQuery,
  useUpdateAccountTypeMutation, useDeleteAccountTypeMutation,
} = accountTypeApi;
