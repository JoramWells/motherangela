'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useGetPatientsQuery } from '@/api/patients/patients.api';
import { columns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Patients',
    link: '',
  },
];

function Patients() {
  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({ fetchQuery: useGetPatientsQuery });
  // console.log(patientsData);
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Patient History"
          columns={columns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              className="bg-emerald-600 shadow-none hover:bg-emerald-700"
              size="sm"
              onClick={() => router.push('/patients/add')}
            >
              NEW
            </Button>
          )}
        />

      </div>
    </>
  );
}

export default function WrappedPatients() {
  return (
    <Suspense>
      <Patients />
    </Suspense>
  );
}
