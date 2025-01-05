'use client'

import { useGetPatientsQuery } from '@/api/patients/patients.api';
import { DataTable } from '@/components/custom/DataTable'
import React from 'react'
import { columns } from './column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

const Patients = () => {
  const {data: patientsData} = useGetPatientsQuery();
  console.log(patientsData)
  return (
    <>
    <BreadcrumbNav />
      <div className="p-2">
        <DataTable columns={columns} data={patientsData ?? []} />
      </div>
    </>
  );
}

export default Patients