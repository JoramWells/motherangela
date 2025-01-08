'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { maternityProfileColumns } from '../column';
import { useGetAllInsurancesQuery } from '@/api/insurance/insurance.api';
import usePreprocessData from '@/hooks/usePreprocessData';

function Patients() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { data: maternityData } = useGetAllInsurancesQuery(
    {
      page: Number(page),
      pageSize: 10,
      searchQuery: search,
    },
  );

  const { data, total } = usePreprocessData(maternityData);

  console.log(maternityData);
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Maternity Profiles
            </h2>
          </div>
          <DataTable
            columns={maternityProfileColumns}
            data={data ?? []}
            total={total}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;
