'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { payrollEmployeeLoanRecordsColumns } from '../column';
import { useGetAllPayrollEmployeeLoanRecordsQuery } from '@/api/payroll/payrollEmployeeLoanRecords.api';
import { Button } from '@/components/ui/button';
import TableContainer from '@/components/custom/table/TableContainer';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Maternity Delivery',
    link: '',
  },
];

function LoanRecords() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllPayrollEmployeeLoanRecordsQuery,
  });
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Loan Records"
          columns={payrollEmployeeLoanRecordsColumns}
          data={data}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="shadow-none bg-green-700 hover:bg-green-800"
              onClick={() => router.push('/loan-records/add')}
            >
              NEW
            </Button>
          )}

        />
      </div>
    </>
  );
}

export default function WrappedLoanRecords() {
  return (
    <Suspense>
      <LoanRecords />
    </Suspense>
  );
}
