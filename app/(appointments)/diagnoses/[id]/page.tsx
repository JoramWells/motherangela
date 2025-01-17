'use client';

import moment from 'moment';
import React, { use, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { useGetAppointmentDiagnosesQuery } from '@/api/appointments/appointmentDiagnoses.api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function AppointmentDetail({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const patient_id = searchParams.get('patient_id');
  const { data } = useGetAppointmentDiagnosesQuery(id, {
    skip: !id,
  });
  const { data: patientData } = useGetPatientQuery(patient_id as string, {
    skip: !patient_id,
  });

  const {
    cell_phone, dob, first_name, in_patient_file_no, middle_name, out_patient_file_no,
  } = patientData || {};

  const listItems = useMemo(
    () => [
      {
        id: '1',
        label: 'home',
        link: '/',
      },
      {
        id: '2',
        label: 'Appointment Diagnoses',
        link: '/diagnoses',
      },
      {
        id: '3',
        label: first_name as string,
        link: '',
      },
    ],
    [first_name],
  );

  console.log(data, 'dtx');

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2 flex items-start space-x-2">
        <PatientSideProfile
          cell_phone={cell_phone!}
          dob={dob!}
          first_name={first_name!}
          in_patient_file_no={in_patient_file_no!}
          middle_name={middle_name!}
          out_patient_file_no={out_patient_file_no!}
        />
        <div className="h-[50vh] border-l" />
        <div className="flex-1">
          <div className="mb-1 bg-white p-2 rounded-lg text-[16px]">
            <p
              className=""
            >
              Appointment Diagnoses for
              {' '}
              <span className="font-semibold">
                {first_name}
              </span>
            </p>
          </div>
          <div
            className="flex-1 flex flex-row space-x-2 items-start"
          >
            <div className="bg-white border border-zinc-100 rounded-lg flex-1 flex flex-col space-y-1">
              <div
                className="p-2 border-b border-zinc-200 text-zinc-700 text-[14px] bg-zinc-50 rounded-t-lg font-semibold"
              >
                Appointment Details
              </div>
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Attended By</p>
                <p
                  className="text-zinc-700 font-semibold"
                >
                  {data?.appointment?.user?.full_name}
                </p>
              </div>
              <hr className="border-zinc-100" />
              {/*  */}
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Date</p>
                <p
                  className="font-semibold"
                >
                  {moment(data?.appointment?.appointment_date).format('ll')}
                </p>
              </div>
              <hr className="border-zinc-100" />
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px] items-center">
                <p className="text-zinc-500">Status</p>
                <Badge
                  className="bg-zinc-200 shadow-none text-zinc-700 hover:bg-zinc-50"
                >
                  {data?.appointment?.appointment_status}
                </Badge>
              </div>
              <div
                className="justify-end flex p-1 border-t"
              >
                <Button
                  size="sm"
                  className="shadow-none"
                  variant="link"
                >
                  View In Appointments
                </Button>
              </div>

            </div>
            <div className="bg-white border border-zinc-100 rounded-lg flex-1 flex flex-col space-y-1">
              <div
                className="p-2 border-b border-zinc-200 text-[14px] font-semibold text-zinc-700 bg-zinc-50 rounded-t-lg"
              >
                Diagnosis Details
              </div>
              {/*  */}
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Diagnosed For</p>
                <p>
                  { data && data?.diagnosis_for?.length > 0 ? data?.diagnosis_for : 'N/A'}
                </p>
              </div>
              <hr className="border-zinc-100" />
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px] items-center">
                <p className="text-zinc-500">Doctor Notes</p>
                <Link
                  href="/"
                  className="text-cyan-500 underline"
                >
                  View Doctor Notes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentDetail;
