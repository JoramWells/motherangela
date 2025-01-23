/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { JSX, Suspense, useState } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { columns, diagnosesColumns } from '../../(appointments)/column';
// import AppointmentFilter from '@/components/custom/filters/AppointementFilter';
import { useGetAllInsurancesQuery } from '@/api/insurance/insurance.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAppointmentPatientQueueQuery } from '@/api/appointments/appointments.api';
import { queueColumns } from '../column';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Queue',
    link: '',
  },
];

function DiagnosesPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAppointmentPatientQueueQuery });

  const [gender, setGender] = useState('male');
  const [insurance, setInsurance] = useState('');
  const [pageSize, setPageSize] = useState(1);

  const { data: insuranceData } = useGetAllInsurancesQuery({
    page: 1,
    pageSize: 100,
    searchQuery: '',
  });

  console.log(data);

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Patient Diagnoses"
          columns={queueColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          // filter={(
          //   <AppointmentFilter
          //     insurance={insurance}
          //     gender={gender}
          //     pageSize={pageSize}
          //     setInsurance={setInsurance}
          //     setGender={setGender}
          //     setPageSize={setPageSize}
          //     total={total}
          //     insuranceOptions={insuranceOptions ?? []}
          //   />
          //   )}
        />

      </div>
    </>
  );
}

export default function WrappedDiagnosesPage() {
  return (
    <Suspense
      fallback={<div>Loading..</div>}
    >
      <DiagnosesPage />
    </Suspense>
  );
}
