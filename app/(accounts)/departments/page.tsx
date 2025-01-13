'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { accountingAssetsColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllAccountingAssetQuery } from '@/api/accounts/accounting_assets/accountingAsset.api';

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
  } = usePaginatedSearch({ fetchQuery: useGetAllAccountingAssetQuery });
  console.log(data);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Accounting Assets"
          columns={accountingAssetsColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </>
  );
}

export default function WrappedMedicineMapping() {
  return (
    <Suspense>
      <MedicineMapping />
    </Suspense>
  );
}
