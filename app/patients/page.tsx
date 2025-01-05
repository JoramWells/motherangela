'use client'

import { useGetPatientsQuery } from '@/api/patients/patients.api';
import { DataTable } from '@/components/custom/DataTable'
import React from 'react'
import { columns } from './column';

const Patients = () => {
  const {data: patientsData} = useGetPatientsQuery();
  console.log(patientsData)
  return (
    <div className='p-2' >
      <DataTable columns={columns} 
      data={patientsData ?? []}
      />
    </div>
  )
}

export default Patients