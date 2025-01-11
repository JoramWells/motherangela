'use client';

import React from 'react';
import { useGetAllMedicationQuery } from '@/api/medication/medicine.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { internalPharmacyRequestColumns, medicineStockColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllInternalPharmacyRequestsQuery } from '@/api/medication/internalPharmacyRequest.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Medicine Requests',
    link: '',
  },
];

function InternalPharmacyRequests() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllInternalPharmacyRequestsQuery });
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Medicine Requests"
          columns={internalPharmacyRequestColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </>
  );
}

export default InternalPharmacyRequests;
