'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { medicineMappingColumns } from '../column';
import { useGetAllInsuranceMedicationMappingQuery } from '@/api/insurance/insuranceMedicineMapping.api';
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
    label: 'Medicine Insurance Mapping',
    link: '',
  },
];

function MedicineMapping() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllInsuranceMedicationMappingQuery });

  return (
    <Suspense fallback={<div>loading..</div>}>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Medicine Insurance Mapping"
          columns={medicineMappingColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </Suspense>
  );
}

export default MedicineMapping;
