'use client';

import React, { use, useMemo } from 'react';
import { payrollMonthlyDeductionsFileColumns } from '@/app/(payroll)/column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import TableContainer from '@/components/custom/table/TableContainer';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetPayrollPeriodQuery } from '@/api/payroll/payrollPeriods';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAllPayrollEmployeeMonthlyDeductionFileByEmployeeIDQuery } from '@/api/payroll/payrollEmployeeMonthlyDeducationsFile.api';

function PayrollDetailsPage({ params }:{params:Promise<{id:string, employeeID: string}>}) {
  const { id, employeeID } = use(params);
  const { data: periodData, isLoading: isLoadingPeriod } = useGetPayrollPeriodQuery(id, {
    skip: !id,
  });

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllPayrollEmployeeMonthlyDeductionFileByEmployeeIDQuery,
    employee_id: employeeID,
    id,
  });

  const listItems = useMemo(
    () => [
      {
        id: '1',
        label: 'home',
        link: '/',
      },
      {
        id: '3',
        label: 'Payroll',
        link: '/payroll',
      },
      {
        id: '2',
        label: 'Deductions',
        link: `/payroll/${id}/deductions`,
      },
      {
        id: '4',
        label: data[0]?.payroll_employee_record?.full_name?.split(' ')[0] || '',
        link: '',
      },
    ],
    [data, id],
  );

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title={isLoadingPeriod ? <Skeleton className="p-3 w-[130px]" /> as unknown as string : ` ${periodData?.payroll_description} Employee Deduction File`}
          columns={payrollMonthlyDeductionsFileColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  );
}

export default PayrollDetailsPage;
