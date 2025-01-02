import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const procedureApi = createApi({
  reducerPath: 'procedureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/procedure-service/procedure-details`,

  }),
  endpoints: (builder) => ({
    getProcedures: builder.query({
      query: () => 'fetchAll',
    }),
    addUserType: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getUserType: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updateUserType: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteUserType: builder.mutation({
      query(id) {
        return {
          url: `delete${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const { useGetProceduresQuery, useAddUserTypeMutation, useGetUserTypeQuery } = procedureApi;
