'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { maternityPhysicalExaminationColumn } from '../column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';
import { useGetAllMaternityPhysicalExaminationQuery } from '@/api/maternity/maternity-physical-examination.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Physical Examination',
    link: '',
  },
];

function MaternityPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAllMaternityPhysicalExaminationQuery });
  const router = useRouter();
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Physical Examination"
          columns={maternityPhysicalExaminationColumn}
          data={data ?? []}
          search={search}
          setSearch={setSearch}
          total={total as number}
          rightLabel={(
            <Button
              className="bg-emerald-600 shadow-none hover:bg-emerald-700"
              size="sm"
              onClick={() => router.push('/physical-examination/add')}
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
