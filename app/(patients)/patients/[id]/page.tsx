'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import moment from 'moment';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import { Button } from '@/components/ui/button';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { useGetAppointmentByPatientIDQuery } from '@/api/appointments/appointments.api';
import { Badge } from '@/components/ui/badge';

function PatientDetailsPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetPatientQuery(id, {
    skip: !id,
  });

  const {
    cell_phone, dob, first_name, in_patient_file_no, middle_name, out_patient_file_no,
  } = data || {};

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
      label: `${first_name} ${middle_name}`,
      link: '',
    },
  ], [first_name, middle_name]);

  const { data: appointmentData } = useGetAppointmentByPatientIDQuery(id, {
    skip: !id,
  });

  const router = useRouter();

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2 flex flex-row space-x-2 items-start"
      >
        <PatientSideProfile
          cell_phone={cell_phone!}
          dob={dob!}
          first_name={first_name!}
          in_patient_file_no={in_patient_file_no!}
          middle_name={middle_name!}
          out_patient_file_no={out_patient_file_no!}
        />
        <div className="border-l h-[50vh]" />
        {/*  */}
        <div
          className="p-2 bg-white rounded-lg w-1/4 relative "
        >
          <p
            className="text-zinc-700 text-[14px]"
          >
            Recent Appointment
          </p>
          <div
            className="flex flex-row justify-between items-center"
          >
            <p
              className="text-[14px] font-semibold"
            >
              {appointmentData?.consultation_types_group?.consultation_type_group_description}
            </p>
            <Badge
              className="shadow-none bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
            >
              {appointmentData?.appointment_status}
            </Badge>
          </div>

          <p className="text-[12px] text-slate-500">{moment(appointmentData?.appointment_date).format('ll')}</p>

          <div
            className="flex flex-row justify-between items-center"
          >
            <Link
              href={`/patients/${data?.patient_id}/appointments`}
              className="text-[12px] text-cyan-500 hover:underline"
            >
              View All Appointments
            </Link>
            <Button
              className="shadow-none  bottom-4 right-4"
              size="sm"
              onClick={() => router.push(`/patients/${data?.patient_id}/appointments/add`)}
            >
              Book Now
            </Button>
          </div>
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
