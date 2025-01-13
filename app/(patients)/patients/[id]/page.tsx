'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import { Button } from '@/components/ui/button';

function PatientDetailsPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetPatientQuery(id, {
    skip: !id,
  });

  const listItems = useMemo(() => [
    {
      id: '1',
      label: 'home',
      link: '/',
    },
    {
      id: '2',
      label: 'Patients',
      link: '/patients',
    },
    {
      id: '3',
      label: `${data?.first_name} ${data?.middle_name}`,
      link: '',
    },
  ], [data]);

  console.log(data);

  const router = useRouter();

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2 flex flex-row space-x-2"
      >
        <div className="bg-white w-1/3 rounded-lg border border-zinc-100">
          <div className="bg-zinc-50 border-b p-2 text-[14px] rounded-t-lg">
            {`${data?.first_name} ${data?.middle_name}`}
          </div>
          <div className="p-2 flex flex-row justify-between text-[12px]">
            <p>Inpatient File No.</p>
            <p>{data?.in_patient_file_no}</p>
          </div>
          <hr />
          {/*  */}
          <div className="p-2 flex flex-row justify-between text-[12px]">
            <p>Outpatient File No.</p>
            <p>{data?.out_patient_file_no}</p>
          </div>

          <hr />
          {/*  */}
          <div className="p-2 flex flex-row justify-between text-[12px]">
            <p>Cell Phone</p>
            <p>{data?.cell_phone}</p>
          </div>
        </div>

        {/*  */}
        <div
          className="p-4 bg-white rounded-lg w-1/4 relative"
        >
          <p>Book Appointment Now</p>
          <Button
            className="shadow-none absolute bottom-4 right-4"
            size="sm"
            onClick={() => router.push(`/patients/${data?.patient_id}/appointments/add`)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PatientDetailsPage;
