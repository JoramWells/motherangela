'use client';

import React, { Suspense, useState } from 'react';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { personalAccountColumns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import PersonalAccountFilter from '@/components/custom/filters/PersonalAccountFilter';
import { useGetAllPersonalAccountChargesQuery } from '@/api/accounts/charges/personalAccountCharges.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Patient Account Charges',
    link: '',
  },
];

function PersonalAccountPage() {
  const [cleared, setCleared] = useState('cleared');

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllPersonalAccountChargesQuery,
    status: cleared || '',
  });

  console.log(data);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Patient Account Charges"
          columns={personalAccountColumns}
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
