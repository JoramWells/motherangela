'use client';

import React from 'react';
import { useGetAllInpatientTreatmentChartsQuery } from '@/api/admission/inpatient.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { inpatientTreatmentChartColumn } from './column';

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

function TreatmentChartPage() {
  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({ fetchQuery: useGetAllInpatientTreatmentChartsQuery });
  console.log(data);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Insurances"
          columns={inpatientTreatmentChartColumn}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </div>
  );
}

export default TreatmentChartPage;
