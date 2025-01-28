'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';
import { procedureDetailsColumns, recentLabRequestColumn } from '../column';
import { useGetAllProceduresQuery } from '@/api/lab/procedure/procedureDetails.api';
import ProcedureFilter from '@/components/custom/filters/ProcedureFilter';

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
  } = usePaginatedSearch({ fetchQuery: useGetAllProceduresQuery });
  console.log(data);
  const router = useRouter();

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Procedure Details"
          columns={procedureDetailsColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          filter={<ProcedureFilter />}
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
