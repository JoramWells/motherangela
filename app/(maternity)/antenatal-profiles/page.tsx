'use client';

import React from 'react';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { maternityAntenatalProfileColumns } from '../column';
import { useGetAllMaternityAntenatalProfileQuery } from '@/api/maternity/maternity-antenantal-profile.api';
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
  } = usePaginatedSearch({ fetchQuery: useGetAllMaternityAntenatalProfileQuery });
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Antenatal Profiles"
          columns={maternityAntenatalProfileColumns}
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
