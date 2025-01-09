'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { payrollEmployeeDeductionsColumns } from '../column';
import { useGetAllPayrollEmployeeDeductionsQuery } from '@/api/payroll/payrollEmployeeDeductions';
import usePreprocessData from '@/hooks/usePreprocessData';
import { Badge } from '@/components/ui/badge';
import useSearch from '@/hooks/useSearch';

function Patients() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { data: profileData } = useGetAllPayrollEmployeeDeductionsQuery(
    {
      page: Number(page),
      pageSize: 10,
      searchQuery: search,
    },
  );

  const { data, total } = usePreprocessData(profileData);

  useSearch({ search, setSearch });
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Deductions
            </h2>
            <Badge
              className="shadow-none bg-zinc-200 hover:bg-zinc-200
              text-zinc-700
              "
            >
              {total}
            </Badge>
          </div>
          <DataTable
            columns={payrollEmployeeDeductionsColumns}
            data={data ?? []}
            total={total}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;
