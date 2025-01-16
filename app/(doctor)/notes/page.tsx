'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { doctorNotesColumns } from '../column';
import { useGetAllDoctorNotesQuery } from '@/api/doctor/doctor-notes.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Insurances',
    link: '',
  },
];

function InsurancePage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllDoctorNotesQuery });
  console.log(data);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="My Notes"
          columns={doctorNotesColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </>
  );
}

export default function WrappedInsurancePage() {
  return (
    <Suspense>
      <InsurancePage />
    </Suspense>
  );
}
