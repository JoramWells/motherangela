'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllAdmissionsQuery } from '@/api/admission/admissions.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';
import { admissionColumn } from '../column';

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

function Admission() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllAdmissionsQuery });
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />

      <div className="p-2">
        <TableContainer
          title="In-Patient (Admitted)"
          columns={admissionColumn}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              className="bg-emerald-600 shadow-none hover:bg-emerald-700"
              size="sm"
              onClick={() => router.push('/in-patient/add')}
            >
              NEW
            </Button>
          )}
        />

      </div>
    </>
  );
}

export default function WrappedAdmission() {
  return (
    <Suspense>
      <Admission />
    </Suspense>
  );
}
