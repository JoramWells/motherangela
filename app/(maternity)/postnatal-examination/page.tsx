'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { maternityPostnatalExaminationColumn } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';
import { useGetAllMaternityPostNatalExaminationsQuery } from '@/api/maternity/maternity-postnatal-examination';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Maternity Visits',
    link: '',
  },
];

const tabValues = [
  {
    id: 1,
    label: 'First',
  },
  {
    id: 2,
    label: 'Second',
  },
  {
    id: 3,
    label: 'Third',
  },
  {
    id: 4,
    label: 'Fourth',
  },
];

function MaternityPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllMaternityPostNatalExaminationsQuery });
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />

      {/*  */}
      <div
        className="p-2"
      >
        <p className="mb-1 font-semibold text-zinc-700">Examinations</p>
        <div
          className="flex space-x-2"
        >
          {tabValues.map((item) => (
            <Button
              size="sm"
              className="shadow-none"
              key={item.id}
              variant="outline"
            >

              {item.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="p-2 pt-0">
        <TableContainer
          title="Postnatal Examination"
          columns={maternityPostnatalExaminationColumn}
          data={data ?? []}
          search={search}
          setSearch={setSearch}
          total={total as number}
          rightLabel={(
            <Button
              className="bg-emerald-600 shadow-none hover:bg-emerald-700"
              size="sm"
              onClick={() => router.push('/m-visits/add')}
            >
              NEW
            </Button>
          )}
        />

      </div>
    </>
  );
}

export default function WrappedMaternityPage() {
  return (
    <Suspense>
      <MaternityPage />
    </Suspense>
  );
}
