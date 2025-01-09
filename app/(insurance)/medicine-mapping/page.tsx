'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { medicineMappingColumns } from '../column';
import usePreprocessData from '@/hooks/usePreprocessData';
import { Badge } from '@/components/ui/badge';
import { useGetAllInsuranceMedicationMappingQuery } from '@/api/insurance/insuranceMedicineMapping.api';
import useSearch from '@/hooks/useSearch';

function Patients() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { data: medicationMapping } = useGetAllInsuranceMedicationMappingQuery({
    page: Number(page),
    pageSize: 10,
    searchQuery: search,
  });
  const { data, total } = usePreprocessData(medicationMapping);

  useSearch({ search, setSearch });

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
              Medicine Insurance Mapping
            </h2>
            <Badge
              className="bg-zinc-200 text-zinc-700 shadow-none"
            >
              {total ?? 0}
            </Badge>
          </div>
          <DataTable
            columns={medicineMappingColumns}
            data={data ?? []}
            total={total}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;
