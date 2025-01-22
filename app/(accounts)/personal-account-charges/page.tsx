'use client';

import React, { useState } from 'react';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { personalAccountColumns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllPersonalChargePaymentsQuery } from '@/api/accounts/charges/personalChargesPayment.api';
import PersonalAccountFilter from '@/components/custom/filters/PersonalAccountFilter';

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
    fetchQuery: useGetAllPersonalChargePaymentsQuery,
    status: cleared || '',
  });
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Personal Account Charges"
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

export default PersonalAccountPage;
