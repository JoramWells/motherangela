'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllPayrollEmployeeRecordsQuery } from '@/api/payroll/payrollEmployeeRecords.api';
import { employeeRecordsColumn } from '../column';
import usePreprocessData from '@/hooks/usePreprocessData';
import useSearch from '@/hooks/useSearch';
import { Badge } from '@/components/ui/badge';

function Patients() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { data: profileData } = useGetAllPayrollEmployeeRecordsQuery({
    page: Number(page),
    pageSize: 10,
    searchQuery: search,
  });

  const { data, total } = usePreprocessData(profileData);
  useSearch({ search, setSearch });

  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200
          flex flex-row space-x-2 items-center
          "
          >
            <h2 className=" text-slate-900 font-[600] ">
              Employee Records
            </h2>
            <Badge
              className="bg-zinc-200 shadow-none text-zinc-700
              hover:bg-zinc-200
              "
            >
              {total}
            </Badge>
          </div>
          <DataTable
            columns={employeeRecordsColumn}
            data={data ?? []}
            total={total as number}
            isSearch
            search={search}
            setSearch={setSearch}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;
