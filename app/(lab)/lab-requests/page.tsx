'use client';

import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { Button } from '@/components/ui/button';
import { recentLabRequestColumn } from '../column';
import { useGetAllRecentInternalLabRequestsQuery } from '@/api/lab/internalLabRequests.api';
import CustomCalendar from '@/components/custom/lab/CustomCalendar';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Patients',
    link: '',
  },
];

function Patients() {
  const [date, setDate] = useState<Date|string>();

  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({
    fetchQuery: useGetAllRecentInternalLabRequestsQuery,
    date: date ? moment(date).format('YYYY-MM-DD') : '',
  });
  // console.log(patientsData);
  const router = useRouter();

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Internal Lab Requests"
          columns={recentLabRequestColumn}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              className="bg-emerald-600 shadow-none hover:bg-emerald-700"
              size="sm"
              onClick={() => router.push('/patients/add')}
            >
              NEW
            </Button>
          )}
          filter={(
            <CustomCalendar
              date={date}
              setDate={setDate}
            />
)}
        />

      </div>
    </>
  );
}

export default function WrappedPatients() {
  return (
    <Suspense>
      <Patients />
    </Suspense>
  );
}
