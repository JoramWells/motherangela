import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginatedResponse, UserInterface } from 'motherangela';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/patient-service/users`,

  }),
  endpoints: (builder) => ({

    getAllUsers: builder.query<PaginatedResponse<UserInterface>,
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
    addUser: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getUser: builder.query<UserInterface, string>({
      query: (id) => `detail/${id}`,
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    updateUserPassword: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update-password/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteUser: builder.mutation({
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
  useGetAllUsersQuery, useAddUserMutation, useGetUserQuery, useUpdateUserPasswordMutation,
} = userApi;
