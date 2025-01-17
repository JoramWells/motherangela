'use client';

import React, { use } from 'react';
import { useSearchParams } from 'next/navigation';
import moment from 'moment';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetDoctorNotesQuery } from '@/api/doctor/doctor-notes.api';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Doctor Notes',
    link: '',
  },
];

function NotesPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetDoctorNotesQuery(id, {
    skip: !id,
  });
  const searchParams = useSearchParams();
  const patient_id = searchParams.get('patient_id');
  const { data: patientData } = useGetPatientQuery(patient_id as string, {
    skip: !patient_id,
  });

  const {
    first_name, middle_name, cell_phone, in_patient_file_no,
    out_patient_file_no, dob,
  } = patientData || {};

  console.log(data);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2 flex flex-row items-start space-x-2"
      >
        <PatientSideProfile
          first_name={first_name!}
          middle_name={middle_name!}
          cell_phone={cell_phone!}
          in_patient_file_no={in_patient_file_no!}
          out_patient_file_no={out_patient_file_no!}
          dob={dob!}
        />

        <div className="h-[50vh] border-l" />
        <div className="flex-1 flex-col flex space-y-2">
          <div>
            <p>Appointment Date</p>
            <p
              className="text-[12px] text-zinc-500"
            >
              {moment(data?.appointment?.appointment_date).format('ll')}
            </p>
          </div>
          <hr />
          <div>
            <p>Patient Complaints</p>
            <p
              className="text-[12px] text-zinc-500"
            >
              {data?.presenting_complaints}
            </p>
          </div>
          <hr />
          <div>
            <p>
              Treatment Summary
            </p>
            <p
              className="text-[12px] text-zinc-500"
            >
              {data?.treatment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
