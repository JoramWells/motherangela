'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllHospitalQuery } from '@/api/patients/hospital/hospital.api';
import TableContainer from '@/components/custom/table/TableContainer';
import { hospitalColumns } from '../column';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Hospitals',
    link: '',
  },
];

function SuperAdmin() {
  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({
    fetchQuery:
    useGetAllHospitalQuery,
  });

  const router = useRouter();

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Hospitals"
          columns={hospitalColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="shadow-none bg-emerald-600 hover:bg-emerald-700"
              onClick={() => router.push('hospitals/add')}
            >
              NEW
            </Button>
)}
        />

      </div>
    </div>
  );
}

export default SuperAdmin;
