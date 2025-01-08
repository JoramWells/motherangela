'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { insuranceServiceCostMappingColumns } from '../column';
import usePreprocessData from '@/hooks/usePreprocessData';
import { Badge } from '@/components/ui/badge';
import { useGetAllInsuranceServiceCostMappingQuery } from '@/api/insurance/insuranceServiceCostMapping.api';

function Patients() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { data: dtx } = useGetAllInsuranceServiceCostMappingQuery(
    {
      page: Number(page),
      pageSize: 10,
      searchQuery: search,
    },
  );

  const { data, total } = usePreprocessData(dtx);

  console.log(data);

  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200
          flex flex-row space-x-2 items-center
          "
          >
            <h2 className="text-lg  text-slate-700">
              Service Cost Mapping
            </h2>
            <Badge
              className="bg-zinc-200 text-zinc-700 shadow-none"
            >
              {total ?? 0}
            </Badge>
          </div>
          <DataTable
            columns={insuranceServiceCostMappingColumns}
            data={data ?? []}
            total={total}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;
