'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PayrollEmployeeBenefitsFileInterface } from 'motherangela';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { employeeBenefitsColumns } from '../column';
import { useGetAllPayrollEmployeeBenefitsQuery } from '@/api/payroll/payrollEmployeeBenefitsFile.api';
import usePreprocessData from '@/hooks/usePreprocessData';
import useSearch from '@/hooks/useSearch';
import { Badge } from '@/components/ui/badge';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'In Patient',
    link: '',
  },
];

function Benefits() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { data: profileData } = useGetAllPayrollEmployeeBenefitsQuery({
    page: Number(page),
    pageSize: 10,
    searchQuery: search,
  });

  const { data, total } = usePreprocessData<PayrollEmployeeBenefitsFileInterface>(profileData);
  useSearch({ search, setSearch });

  console.log(data);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200
          flex flex-row space-x-2 items-center
          "
          >
            <h2 className="text-lg  text-slate-700">
              Employee Benefits
            </h2>
            <Badge
              className="bg-zinc-200 shadow-none text-zinc-700"
            >
              {total}
            </Badge>
          </div>
          <DataTable
            columns={employeeBenefitsColumns}
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

export default function WrappedBenefits() {
  return (
    <Suspense>
      <Benefits />
    </Suspense>
  );
}
