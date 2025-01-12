'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllPayrollEmployeeRecordsQuery } from '@/api/payroll/payrollEmployeeRecords.api';
import { employeeRecordsColumn } from '../column';
import TableContainer from '@/components/custom/table/TableContainer';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Employee Records',
    link: '',
  },
];

function EmployeeRecords() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllPayrollEmployeeRecordsQuery });

  const router = useRouter();

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Employee Records"
          columns={employeeRecordsColumn}
          data={data ?? []}
          total={total as number}
          // isSearch
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 shadow-none"
              onClick={() => router.push('/employee-records/add')}
            >
              NEW
            </Button>
          )}

        />

      </div>
    </>
  );
}

export default function WrappedEmployeeRecords() {
  return (
    <Suspense>
      <EmployeeRecords />
    </Suspense>
  );
}
