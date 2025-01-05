import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const payrollEmployeeBenefitsApi = createApi({
  reducerPath: 'payrollEmployeeBenefitsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/payroll-service/payroll-employee-benefits-file`,

  }),
  endpoints: (builder) => ({
    getAllPayrollEmployeeBenefits: builder.query({
      query: () => 'fetchAll',
    }),
    addPayrollEmployeeBenefits: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPayrollEmployeeBenefit: builder.query({
      query: (id) => `detail/${id}`,
    }),
    updatePayrollEmployeeBenefit: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `update${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deletePayrollEmployeeBenefit: builder.mutation({
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
  useGetAllPayrollEmployeeBenefitsQuery, useAddPayrollEmployeeBenefitsMutation,
  useGetPayrollEmployeeBenefitQuery,
  useUpdatePayrollEmployeeBenefitMutation, useDeletePayrollEmployeeBenefitMutation,
} = payrollEmployeeBenefitsApi;
