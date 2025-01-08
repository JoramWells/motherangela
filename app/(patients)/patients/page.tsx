'use client';

import React from 'react';
import { useGetPatientsQuery } from '@/api/patients/patients.api';
import { DataTable } from '@/components/custom/table/DataTable';
import { columns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

function Patients() {
  const { data: patientsData } = useGetPatientsQuery();
  // console.log(patientsData);
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div
            className="pl-2 pt-2"
          >
            <h2
              className="text-lg font-semibold text-zinc-500"
            >
              Patient History
            </h2>
          </div>
          <DataTable columns={columns} data={patientsData ?? []} />
        </div>
      </div>
    </>
  );
}

export default Patients;
