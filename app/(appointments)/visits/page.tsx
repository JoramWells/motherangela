/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useState } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { columns } from '../column';
import { useGetAppointmentsQuery } from '@/api/appointments/appointments.api';
import usePreprocessData from '@/hooks/usePreprocessData';
import { useGetAllInsurancesQuery } from '@/api/insurance/insurance.api';
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
    label: 'Payroll Records',
    link: '',
  },
];

function Patients() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({ fetchQuery: useGetAppointmentsQuery });

  const [gender, setGender] = useState('male');
  const [insurance, setInsurance] = useState('');
  const [pageSize, setPageSize] = useState(1);

  const { data: insuranceData } = useGetAllInsurancesQuery({
    page: 1,
    pageSize: 100,
    searchQuery: '',
  });

  const { data: processedInsData } = usePreprocessData(insuranceData);

  // const insuranceOptions = useCallback(() => processedInsData?.map((insurance) => ({
  //   id: insurance.insurance_name,
  //   label: insurance.insurance_name,
  // })), [insuranceData])();

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">

        <TableContainer
          title="Patient History"
          columns={columns}
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

export default Patients;
