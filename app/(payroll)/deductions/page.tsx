'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { payrollEmployeeDeductionsColumns } from '../column';
import { useGetAllPayrollEmployeeDeductionsQuery } from '@/api/payroll/payrollEmployeeDeductions';
import { Button } from '@/components/ui/button';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Payroll Deductions',
    link: '',
  },
];

function Deduction() {
  const router = useRouter();

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllPayrollEmployeeDeductionsQuery });

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Payroll Deductions"
          columns={payrollEmployeeDeductionsColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="shadow-none bg-green-700 hover:bg-green-800 "
              onClick={() => router.push('/deductions/add')}
            >
              NEW
            </Button>
                    )}
        />

      </div>
    </>
  );
}

export default function WrappedDeduction() {
  return (
    <Suspense>
      <Deduction />
    </Suspense>
  );
}
