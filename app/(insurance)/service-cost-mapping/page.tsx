'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { insuranceServiceCostMappingColumns } from '../column';
import { useGetAllInsuranceServiceCostMappingQuery } from '@/api/insurance/insuranceServiceCostMapping.api';
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
    label: 'Service Cost Mapping',
    link: '',
  },
];

function ServiceCostMappingPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllInsuranceServiceCostMappingQuery });

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Service Cost Mapping"
          columns={insuranceServiceCostMappingColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}

        />

      </div>
    </>
  );
}

export default function WrappedServiceCostMappingPage() {
  return (
    <Suspense>
      <ServiceCostMappingPage />
    </Suspense>
  );
}
