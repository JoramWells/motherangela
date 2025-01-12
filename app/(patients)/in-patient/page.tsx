'use client';

import React from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { admissionColumn } from '../column';
import { useGetAllAdmissionsQuery } from '@/api/admission/admissions.api';
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
    label: 'In Patient',
    link: '',
  },
];

function Admission() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllAdmissionsQuery });
  console.log(data);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />

      <div className="p-2">
        <TableContainer
          title="In-Patient (Admitted)"
          columns={admissionColumn}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </>
  );
}

export default Admission;
