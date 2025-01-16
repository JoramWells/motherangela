'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
        className="p-2 flex flex-row space-x-2 items-start"
      >
        <div className="w-1/5 bg-white p-4 rounded-lg flex flex-col items-center space-y-2">
          <Image
            src="/assets/img/profile.png"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'contain',
            }}
          />

          <div className="flex flex-col items-center justify-center w-full">
            {data

              ? (
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p
                    className="text-[14px] text-zinc-700"
                  >
                    {`${data?.first_name} ${data?.middle_name}`}
                  </p>

                  <div className="flex flex-row justify-between text-[12px] space-x-2 text-zinc-500">
                    <p>Phone :</p>
                    <p>{data?.cell_phone}</p>
                  </div>

                  <div className="flex flex-row justify-between text-[12px] text-zinc-500">
                    <p>In-patient File No.</p>
                    <p>{data?.in_patient_file_no}</p>
                  </div>

                  <div className="flex flex-row justify-between text-[12px] space-x-2 text-zinc-500">
                    <p>Out-patient File No.</p>
                    <p>{data?.out_patient_file_no}</p>
                  </div>
                  <p
                    className="text-[12px] text-zinc-500"
                  >
                    DOB:
                    {' '}
                    {data.dob}
                  </p>
                </div>
              )
              : (
                <Link
                  href="/"
                  className="text-[12px] text-sky-600 underline hover:text-sky-700 "
                >
                  Update Patient profile
                </Link>
              )}
          </div>
        </div>
        <div className="border-l h-[50vh]" />
        {/*  */}
        <div
          className="p-4 bg-white rounded-lg w-1/4 relative"
        >
          <p>Book Appointment Now</p>
          <Link
            href={`/patients/${data?.patient_id}/appointments`}
            className="text-[12px] text-cyan-500 hover:underline"
          >
            View All Appointments
          </Link>
          <Button
            className="shadow-none absolute bottom-4 right-4"
            size="sm"
            onClick={() => router.push(`/patients/${data?.patient_id}/appointments/add`)}
          >
            Book Now
          </Button>
        </div>

        {/*  */}
        <div
          className="p-4 bg-white rounded-lg w-1/4 relative"
        >
          <p>Book Admission Now</p>
          <Link
            href={`/patients/${data?.patient_id}/admissions`}
            className="text-[12px] text-cyan-500 hover:underline"
          >
            View All Admissions
          </Link>
          <Button
            className="shadow-none absolute bottom-4 right-4"
            size="sm"
            onClick={() => router.push(`/patients/${data?.patient_id}/admissions/add`)}
          >
            Admit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PatientDetailsPage;
