'use client';

import React, { use, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetPayrollMonthlyDeductionByPayrollIDQuery } from '@/api/payroll/payrollMonthlyDeductions.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { employeeEmployeePayCalculationsColumn, payrollMonthlyDeductionsColumns } from '../../column';
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
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetPayrollMonthlyDeductionByPayrollIDQuery, id });

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

  const [value, setValue] = useState('deductions');

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="mt-2 mb-1 p-2 bg-white"
      >
        <div>
          <p>
            Payroll Details
          </p>
        </div>
        <div
          className="flex flex-row space-x-2 border-b"
        >
          {[{
            id: '1',
            label: 'Deductions',
          },
          {
            id: '2',
            label: 'Pay',
          },
          ].map((item) => (
            <Button
              key={item.id}
              size="sm"
              className={`shadow-none bg-transparent text-zinc-700
             rounded-none hover:bg-zinc-50 ${item.label.toLowerCase() === value && 'border-b-2'}
            `}
              onClick={() => setValue(item.label.toLowerCase())}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="p-2">
        {value === 'deductions'
&& (
<TableContainer
  title="Payrolls Monthly Deductions"
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
)}

        {value === 'pay'
&& (
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
)}

      </div>
    </div>
  );
}

export default PayrollDetails;
