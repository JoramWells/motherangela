/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { Suspense, useState } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { diagnosesColumns } from '../column';
// import AppointmentFilter from '@/components/custom/filters/AppointementFilter';
import { useGetAllInsurancesQuery } from '@/api/insurance/insurance.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAppointmentDiagnosesDiagnosesQuery } from '@/api/appointments/appointmentDiagnoses.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Diagnoses',
    link: '',
  },
];

function DiagnosesPage() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAppointmentDiagnosesDiagnosesQuery });

  const [gender, setGender] = useState('male');
  const [insurance, setInsurance] = useState('');
  const [pageSize, setPageSize] = useState(1);

  const { data: insuranceData } = useGetAllInsurancesQuery({
    page: 1,
    pageSize: 100,
    searchQuery: '',
  });

  return (
    <Suspense>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Patient Diagnoses"
          columns={diagnosesColumns}
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
    </Suspense>
  );
}

export default DiagnosesPage;
