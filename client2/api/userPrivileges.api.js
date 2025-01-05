import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userPrivilegesApi = createApi({
  reducerPath: 'userPrivilegesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/user-privileges',
  }),
  endpoints: (builder) => ({
    getAllUserPrivileges: builder.query({
      query: () => 'fetchAll',
    }),
    addUserPrivileges: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getUserPrivileges: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateUserPrivileges: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteUserPrivileges: builder.mutation({
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
  useGetAllUserPrivilegesQuery, useAddUserPrivilegesMutation, useGetUserPrivilegesQuery,
  useUpdateUserPrivilegesMutation, useDeleteUserPrivilegesMutation,
} = userPrivilegesApi;
