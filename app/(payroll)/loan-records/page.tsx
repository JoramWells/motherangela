'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { payrollEmployeeLoanRecordsColumns } from '../column';
import { useGetAllPayrollEmployeeLoanRecordsQuery } from '@/api/payroll/payrollEmployeeLoanRecords.api';
import { Button } from '@/components/ui/button';
import TableContainer from '@/components/custom/table/TableContainer';
import usePreprocessData from '@/hooks/usePreprocessData';

function Patients() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { data: profileData } = useGetAllPayrollEmployeeLoanRecordsQuery({
    page: Number(page),
    pageSize: 10,
    searchQuery: search,
  });
  const { data, total } = usePreprocessData(profileData);
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <TableContainer
          title="Loan Records"
          columns={payrollEmployeeLoanRecordsColumns}
          data={data}
          total={total as number}
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

export default Patients;
