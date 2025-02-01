'use client';

import React, { Suspense, useState } from 'react';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { patientAccountColumns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import PersonalAccountFilter from '@/components/custom/filters/PersonalAccountFilter';
import { useGetAllPatientAccountsQuery } from '@/api/accounts/patient/patientAccount.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Personal Account Charge',
    link: '',
  },
];

function PersonalAccountPage() {
  const [cleared, setCleared] = useState('cleared');

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllPatientAccountsQuery,
    status: cleared || '',
  });
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Patient Account"
          columns={patientAccountColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          filter={(
            <PersonalAccountFilter
              cleared={cleared}
              setCleared={setCleared}
            />
)}
        />

      </div>
    </div>
  );
}

export default function WrappedPersonalAccountPage() {
  return (
    <Suspense>
      <PersonalAccountPage />
    </Suspense>
  );
}
