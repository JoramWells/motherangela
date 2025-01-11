'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useGetAllMedicationQuery } from '@/api/medication/medicine.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { medicineStockColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllMedicineStockTakeQuery } from '@/api/medication/medicationStockTake.api';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Medicine Stock',
    link: '',
  },
];

function MedicinesStockPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllMedicineStockTakeQuery });
  console.log(data);
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Medicine Stock"
          columns={medicineStockColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="shadow-none bg-emerald-600 hover:bg-emerald-700"
              onClick={() => router.push('/medicine-stock-take/add')}
            >
              NEW
            </Button>
)}
        />

      </div>
    </>
  );
}

export default MedicinesStockPage;
