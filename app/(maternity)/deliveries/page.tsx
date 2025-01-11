'use client';

import React from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { maternityDeliveriesColumns } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllMaternityDeliveriesQuery } from '@/api/maternity/maternity-deliveries.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Maternity Delivery',
    link: '',
  },
];

function DeliveryPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllMaternityDeliveriesQuery });
  console.log(data);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Maternity Deliveries"
          columns={maternityDeliveriesColumns}
          data={data ?? []}
          search={search}
          setSearch={setSearch}
          total={total as number}
        />

      </div>
    </>
  );
}

export default DeliveryPage;
