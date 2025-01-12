'use client';

import React, { Suspense } from 'react';
import { useGetPatientsQuery } from '@/api/patients/patients.api';
import { columns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
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
    label: 'Payroll Records',
    link: '',
  },
];

function Patients() {
  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({ fetchQuery: useGetPatientsQuery });
  // console.log(patientsData);
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
