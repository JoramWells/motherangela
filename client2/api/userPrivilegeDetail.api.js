import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userPrivilegeDetailsApi = createApi({
  reducerPath: 'userPrivilegeDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/user-privilege-details',
  }),
  endpoints: (builder) => ({
    getAllUserPrivilegeDetails: builder.query({
      query: () => 'fetchAll',
    }),
    addUserPrivilegeDetails: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getUserPrivilegeDetails: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateUserPrivilegeDetails: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteUserPrivilegeDetails: builder.mutation({
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
  useGetAllUserPrivilegeDetailsQuery,
  useAddUserPrivilegeDetailsMutation, useGetUserPrivilegeDetailsQuery,
  useUpdateUserPrivilegeDetailsMutation, useDeleteUserPrivilegeDetailsMutation,
} = userPrivilegeDetailsApi;
