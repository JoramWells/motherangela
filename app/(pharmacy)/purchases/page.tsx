'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { medicinePurchaseColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllMedicinePurchasesQuery } from '@/api/medication/medicinePurchases.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Medicine Purchases',
    link: '',
  },
];

function PurchasesPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllMedicinePurchasesQuery });
  console.log(data);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Medicine Requests"
          columns={medicinePurchaseColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </>
  );
}

export default function WrappedPurchasesPage() {
  return (
    <Suspense>
      <PurchasesPage />
    </Suspense>
  );
}
