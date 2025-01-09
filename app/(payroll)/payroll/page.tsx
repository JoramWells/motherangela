'use client';

import React from 'react';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
// import { maternityAntenatalProfileColumns } from "../column";
import { useGetAllPayrollPeriodsQuery } from '@/api/payroll/payrollPeriods';
import { payrollColumns } from '../column';
import usePreprocessData from '@/hooks/usePreprocessData';

function Patients() {
  const { data: profileData } = useGetAllPayrollPeriodsQuery();
  const { data, total } = usePreprocessData(profileData);
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Payrolls
            </h2>
          </div>
          <DataTable
            columns={payrollColumns}
            data={data ?? []}
            total={total}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;
