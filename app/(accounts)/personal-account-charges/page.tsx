'use client';

import React from 'react';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { personalAccountColumns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllPersonalChargePaymentsQuery } from '@/api/accounts/charges/personalChargesPayment.api';

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
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllPersonalChargePaymentsQuery,
  });
  console.log(data);
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
        />

      </div>
    </div>
  );
}

export default PersonalAccountPage;
