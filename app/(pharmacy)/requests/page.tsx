'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { internalPharmacyRequestColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllInternalPharmacyRequestsQuery } from '@/api/medication/internalPharmacyRequest.api';
import { Button } from '@/components/ui/button';

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
  const router = useRouter();
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
          rightLabel={(
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 shadow-none"
              size="sm"
              onClick={() => router.push('requests/add')}
            >
              NEW
            </Button>
          )}
        />

      </div>
    </>
  );
}

export default function WrappedInternalPharmacyRequests() {
  return (
    <Suspense>
      <InternalPharmacyRequests />
    </Suspense>
  );
}
