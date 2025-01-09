/* eslint-disable no-constant-binary-expression */

'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { DataTable } from '@/components/custom/table/DataTable';
import { medicineCategoryColumns, medicinePurchaseColumns, medicineStockTakeColumns } from './column';
import { useGetAllMedicineCategoryQuery } from '@/api/medication/medicineCategory.api';
import { Button } from '@/components/ui/button';
import CustomTab from '@/components/custom/nav/CustomTab';
import { useGetAllMedicinePurchasesQuery } from '@/api/medication/medicinePurchases.api';
import useSearch from '@/hooks/useSearch';
import usePreprocessData from '@/hooks/usePreprocessData';
import { useGetAllMedicineStockTakeQuery } from '@/api/medication/medicationStockTake.api';

function MedicinesStockPage() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { data: medCategoryData } = useGetAllMedicineCategoryQuery({
    page: Number(page) ?? 1,
    pageSize: 10,
    searchQuery: search,
  });
  const { data: purchaseData } = useGetAllMedicinePurchasesQuery({
    page: Number(page) ?? 1,
    pageSize: 10,
    searchQuery: search,
  });

  useSearch({ search, setSearch });

  const { data: puchasedMed, total } = usePreprocessData(purchaseData);
  const {
    data: preprocessedMedCategoryData,
    total: categoryTotal,
  } = usePreprocessData(medCategoryData);

  const [tab, setTab] = useState('category');

  const { data: stockTakeData } = useGetAllMedicineStockTakeQuery({
    page: Number(page) ?? 1,
    pageSize: 10,
    searchQuery: search,
  });

  const { data: processedStockData, total: stockTakeTotal } = usePreprocessData(stockTakeData);

  return (
    <div>
      <BreadcrumbNav />
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
      <div className="p-2">
        {tab === 'category' && (
          <div className="w-full bg-white rounded-lg border">
            <div
              className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200
          flex flex-row justify-between items-center
          "
            >
              <h2 className="text-lg  text-slate-700">Medicine Category</h2>
              <Button
                size="sm"
                className="shadow-none bg-emerald-700 hover:bg-emerald-800"
              >
                NEW
              </Button>
            </div>
            <DataTable
              columns={medicineCategoryColumns}
              data={preprocessedMedCategoryData ?? []}
              total={categoryTotal as number}
            />
          </div>
        )}

        {tab === 'purchases' && (
          <div className="w-full bg-white rounded-lg border">
            <div
              className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200
          flex flex-row justify-between items-center
          "
            >
              <h2 className="text-lg  text-slate-700">Medicine Purchases</h2>
              <Button
                size="sm"
                className="shadow-none bg-emerald-700 hover:bg-emerald-800"
              >
                NEW
              </Button>
            </div>
            <DataTable
              columns={medicinePurchaseColumns}
              data={puchasedMed ?? []}
              total={total as number}
            />
          </div>
        )}

        {/*  */}
        {tab === 'stock take' && (
          <div className="w-full bg-white rounded-lg border">
            <div
              className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200
          flex flex-row justify-between items-center
          "
            >
              <h2 className="text-lg  text-slate-700">Medicine Purchases</h2>
              <Button
                size="sm"
                className="shadow-none bg-emerald-700 hover:bg-emerald-800"
              >
                NEW
              </Button>
            </div>
            <DataTable
              columns={medicineStockTakeColumns}
              data={processedStockData ?? []}
              total={stockTakeTotal as number}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicinesStockPage;
