'use client';

import React from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllMaternityProfilesQuery } from '@/api/maternity/maternity.api';
import { maternityProfileColumns } from '../column';
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
    label: 'Maternity',
    link: '',
  },
];

function Patients() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllMaternityProfilesQuery });
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Maternity Profiles"
          columns={maternityProfileColumns}
          data={data ?? []}
          search={search}
          setSearch={setSearch}
          total={total as number}
        />

      </div>
    </>
  );
}

export default Patients;
