'use client';

import React from 'react';
import { useGetAllMedicationQuery } from '@/api/medication/medicine.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { medicineColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';

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
  } = usePaginatedSearch({ fetchQuery: useGetAllMedicationQuery });

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Medicine Stock"
          columns={medicineColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </>
  );
}

export default MedicinesStockPage;
