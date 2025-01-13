'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { accountingDocumentsColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllAccountingDocumentsQuery } from '@/api/accounts/accountingDocuments.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Service Cost Mapping',
    link: '',
  },
];

function ServiceCostMappingPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllAccountingDocumentsQuery });

  console.log(data);

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Accounting Documents"
          columns={accountingDocumentsColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}

        />

      </div>
    </>
  );
}

export default function WrappedServiceCostMappingPage() {
  return (
    <Suspense>
      <ServiceCostMappingPage />
    </Suspense>
  );
}
