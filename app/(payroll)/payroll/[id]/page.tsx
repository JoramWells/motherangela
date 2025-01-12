'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useGetPayrollMonthlyDeductionByPayrollIDQuery } from '@/api/payroll/payrollMonthlyDeductions.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { payrollMonthlyDeductionsColumns } from '../../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';
import { useGetPayrollPeriodQuery } from '@/api/payroll/payrollPeriods';

function PayrollDetails({ params }:{params:Promise<{id:string}>}) {
  const router = useRouter();
  const { id } = use(params);
  const { data: periodData } = useGetPayrollPeriodQuery(id);

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetPayrollMonthlyDeductionByPayrollIDQuery, id });

  const listItems = useMemo(
    () => [
      {
        id: '1',
        label: 'home',
        link: '/',
      },
      {
        id: '2',
        label: 'Payroll Records',
        link: '/payroll',
      },
      {
        id: '3',
        label: `${periodData?.payroll_description}`,
        link: '',
      },
    ],
    [periodData],
  );

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Payrolls Deductions"
          columns={payrollMonthlyDeductionsColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="shadow-none bg-emerald-600 hover:bg-emerald-700"
              onClick={() => router.push(`/payroll/${id}/add-deduction`)}
            >
              NEW
            </Button>
          )}
        />

      </div>
    </div>
  );
}

export default PayrollDetails;
