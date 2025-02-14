'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { Button } from '@/components/ui/button';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { payrollEmployeeDeductionsColumns } from '@/app/(payroll)/column';
import { useGetAllPayrollEmployeeMonthlyDeductionFileByPayrollIDQuery } from '@/api/payroll/payrollEmployeeMonthlyDeducationsFile.api';

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

export default function Deduction({ params }:{params:Promise<{id:string}>}) {
  const router = useRouter();
  const { id } = use(params);

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery:
    useGetAllPayrollEmployeeMonthlyDeductionFileByPayrollIDQuery,
    id,
  });

  console.log(data);

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Payroll Deductions"
          columns={payrollEmployeeDeductionsColumns(id)}
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
