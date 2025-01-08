'use client';

import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { columns } from '../column';
import { useGetAppointmentsQuery } from '@/api/appointments/appointments.api';
import useSearch from '@/hooks/useSearch';
import usePreprocessData from '@/hooks/usePreprocessData';
import AppointmentFilter from '@/components/custom/filters/AppointementFilter';
import { useGetAllInsurancesQuery } from '@/api/insurance/insurance.api';

function Patients() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { data: appointmentData } = useGetAppointmentsQuery({
    page: Number(page) ?? 1,
    pageSize: 10,
    searchQuery: search,
  });

  useSearch({ search, setSearch });

  const { data, total } = usePreprocessData(appointmentData);

  const [gender, setGender] = useState('male');
  const [insurance, setInsurance] = useState('');
  const [pageSize, setPageSize] = useState(1);

  const { data: insuranceData } = useGetAllInsurancesQuery();
  console.log(insuranceData, 'insData');

  const insuranceOptions = useCallback(() => insuranceData?.map((insurance) => ({
    id: insurance.insurance_name,
    label: insurance.insurance_name,
  })), [insuranceData])();

  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">Patient History</h2>
          </div>
          <DataTable
            columns={columns}
            data={data ?? []}
            total={total}
            isSearch
            search={search}
            setSearch={setSearch}
            filter={(
              <AppointmentFilter
                insurance={insurance}
                gender={gender}
                pageSize={pageSize}
                setInsurance={setInsurance}
                setGender={setGender}
                setPageSize={setPageSize}
                total={total}
                insuranceOptions={insuranceOptions ?? []}
              />
            )}
          />
        </div>
      </div>
    </>
  );
}

export default Patients;
