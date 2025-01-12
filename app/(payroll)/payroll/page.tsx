'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
// import { maternityAntenatalProfileColumns } from "../column";
import { useGetAllPayrollPeriodsQuery } from '@/api/payroll/payrollPeriods';
import { payrollColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Payroll Records',
    link: '',
  },
];

function PayrollPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllPayrollPeriodsQuery });
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Payrolls"
          columns={payrollColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="shadow-none bg-emerald-600 hover:bg-emerald-700"
            >
              NEW
            </Button>
          )}
        />

      </div>
    </>
  );
}

export default function WrappedPayrollPage() {
  return (
    <Suspense>
      <PayrollPage />
    </Suspense>
  );
}
