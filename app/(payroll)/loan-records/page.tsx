'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { employeeRecordsColumn } from '../column';
import { useGetAllPayrollEmployeeLoanRecordsQuery } from '@/api/payroll/payrollEmployeeLoanRecords.api';
import { Button } from '@/components/ui/button';

function Patients() {
  const { data: profileData } = useGetAllPayrollEmployeeLoanRecordsQuery();
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-1 pl-2 pr-2 bg-zinc-50 rounded-t-lg border-b border-slate-200 flex flex-row justify-between items-center">
            <h2 className="text-lg  text-slate-700">
              Loan Records
            </h2>
            <Button
              size="sm"
              className="shadow-none bg-green-700 hover:bg-green-800"
              onClick={() => router.push('/loan-records/add')}
            >
              NEW
            </Button>
          </div>
          <DataTable columns={employeeRecordsColumn} data={profileData ?? []} />
        </div>
      </div>
    </>
  );
}

export default Patients;
