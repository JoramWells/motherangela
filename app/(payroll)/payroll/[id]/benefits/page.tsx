'use client';

import React, { use, useMemo } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllPayrollEmployeeBenefitsFileByPayrollIDQuery } from '@/api/payroll/payrollEmployeeBenefitsFile.api';
import { employeeBenefitsColumns } from '@/app/(payroll)/column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetPayrollPeriodQuery } from '@/api/payroll/payrollPeriods';
import { Skeleton } from '@/components/ui/skeleton';

export default function Benefits({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const { data: periodData, isLoading: isLoadingPeriod } = useGetPayrollPeriodQuery(id);

  const {
    data: profileData, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllPayrollEmployeeBenefitsFileByPayrollIDQuery,
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
        label: 'Benefits',
        link: '',
      },

    ],
    [],
  );

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title={isLoadingPeriod ? <Skeleton className="p-3 w-[130px]" /> as unknown as string : ` ${periodData?.payroll_description} Employee Benefits`}
          columns={employeeBenefitsColumns(id)}
          data={profileData ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  );
}
