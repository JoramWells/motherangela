'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { employeeEmployeePayCalculationsColumn } from '../../../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';
import { useGetPayrollPeriodQuery } from '@/api/payroll/payrollPeriods';
import { useGetAllPayrollEmployeePayCalculationByPayrollIDQuery } from '@/api/payroll/payrollEmployeePayCalculations.api';

function PayrollDetails({ params }:{params:Promise<{id:string}>}) {
  const router = useRouter();
  const { id } = use(params);
  const { data: periodData } = useGetPayrollPeriodQuery(id);

  const {
    data: payData, total: totalPay, search: searchPay, setSearch: setSearchPay,
  } = usePaginatedSearch(
    { fetchQuery: useGetAllPayrollEmployeePayCalculationByPayrollIDQuery, id },
  );

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
          title="Payrolls Employee Calculations"
          columns={employeeEmployeePayCalculationsColumn}
          data={payData ?? []}
          total={totalPay as number}
          search={searchPay}
          setSearch={setSearchPay}
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
