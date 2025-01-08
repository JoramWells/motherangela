/* eslint-disable no-constant-binary-expression */

'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetAllMedicationQuery } from '@/api/medication/medicine.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { DataTable } from '@/components/custom/table/DataTable';
import { medicineStockColumns } from '../column';
import useSearch from '@/hooks/useSearch';
import usePreprocessData from '@/hooks/usePreprocessData';

function MedicinesStockPage() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { data } = useGetAllMedicationQuery({
    page: Number(page) ?? 1,
    pageSize: 10,
    searchQuery: search,
  });

  useSearch({ search, setSearch });

  const { data: processedData, total } = usePreprocessData(data);
  console.log(processedData);
  return (
    <div>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Medicine Stock
            </h2>
          </div>
          <DataTable
            columns={medicineStockColumns}
            data={processedData ?? []}
            total={total as number}
          />
        </div>
      </div>
    </div>
  );
}

export default MedicinesStockPage;
