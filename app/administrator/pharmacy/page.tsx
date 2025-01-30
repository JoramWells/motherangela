'use client';

import React, { Suspense, useState } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { medicineCategoryColumns, medicinePurchaseColumns, medicineStockTakeColumns } from './column';
import { useGetAllMedicineCategoryQuery } from '@/api/medication/medicineCategory.api';
import CustomTab from '@/components/custom/nav/CustomTab';
import { useGetAllMedicinePurchasesQuery } from '@/api/medication/medicinePurchases.api';
import { useGetAllMedicineStockTakeQuery } from '@/api/medication/medicationStockTake.api';
import TableContainer from '@/components/custom/table/TableContainer';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';

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

function MedicinesStockPage() {
  const { data: puchasedMed, total } = usePaginatedSearch({
    fetchQuery: useGetAllMedicinePurchasesQuery,
  });

  const { data: preprocessedMedCategoryData, total: categoryTotal } = usePaginatedSearch({
    fetchQuery: useGetAllMedicineCategoryQuery,
  });

  const [tab, setTab] = useState('category');

  const {
    data: processedStockData, total: stockTakeTotal, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllMedicineStockTakeQuery,
  });

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="mt-1"
      >
        <CustomTab
          categoryList={[
            {
              id: 1,
              label: 'Category',
            },
            {
              id: 2,
              label: 'Purchases',
            },
            {
              id: 3,
              label: 'Stock Take',
            },
          ]}
          value={tab}
          setValue={setTab}
        />
      </div>
      <div className="p-2">
        {tab === 'category' && (
        <TableContainer
          title="Medicine Category"
          columns={medicineCategoryColumns}
          data={preprocessedMedCategoryData ?? []}
          total={categoryTotal as number}
          search={search}
          setSearch={setSearch}
        />
        )}

        {tab === 'purchases' && (

        <TableContainer
          title="Medicine Purchases"
          columns={medicinePurchaseColumns}
          data={puchasedMed ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />
        )}

        {/*  */}
        {tab === 'stock take' && (

        <TableContainer
          title="Medicine Purchases"
          columns={medicineStockTakeColumns}
          data={processedStockData ?? []}
          total={stockTakeTotal as number}
          search={search}
          setSearch={setSearch}
        />
        )}
      </div>
    </div>
  );
}

export default function WrappedMedicinesStockPage() {
  return (
    <Suspense>
      <MedicinesStockPage />
    </Suspense>
  );
}
