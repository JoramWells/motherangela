'use client';

import { useSearchParams } from 'next/navigation';
import React, { use, useMemo, useState } from 'react';
import { useGetAdmissionQuery } from '@/api/admission/admissions.api';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { Button } from '@/components/ui/button';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetInpatientDoctorVisitsByPatientIDQuery } from '@/api/admission/inpatient-doctor-visits.api';

function InpatientVisits({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const pageParams = useSearchParams();
  const patient_id = pageParams.get('patient_id');

  const { data } = useGetAdmissionQuery(id as string, {
    skip: !id,
  });

  const { data: patientData } = useGetPatientQuery(patient_id as string, {
    skip: !patient_id,
  });
  const listItems = useMemo(() => [
    {
      id: '1',
      label: 'home',
      link: '/',
    },
    {
      id: '2',
      label: 'In-Patient',
      link: '/in-patient',
    },
    {
      id: '3',
      label: `${data?.patient_detail?.first_name} ${data?.patient_detail?.middle_name}`,
      link: '',
    },
    {
      id: '4',
      label: 'Visits',
      link: '',
    },
  ], [data]);

  const {
    cell_phone, dob, first_name, in_patient_file_no, middle_name, out_patient_file_no,
  } = patientData || {};

  const [value, setValue] = useState('doctor');

  const { data: doctorVisits } = usePaginatedSearch({
    fetchQuery: useGetInpatientDoctorVisitsByPatientIDQuery,
    patient_id,
    id,
  });

  console.log(doctorVisits);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2 flex flex-row space-x-2 items-start">
        <PatientSideProfile
          cell_phone={cell_phone!}
          dob={dob!}
          first_name={first_name!}
          in_patient_file_no={in_patient_file_no!}
          middle_name={middle_name!}
          out_patient_file_no={out_patient_file_no!}
        />

        {/*  */}
        <div className="h-[50vh] border-l" />
        <div className="flex-1">
          <div
            className="flex-1"
          >
            <div
              className="flex flex-row space-x-2 border-b"
            >
              {[{
                id: '1',
                label: 'Doctor',
              },
              {
                id: '2',
                label: 'Nurse',
              },
              {
                id: '3',
                label: 'Physiotherapists',
              },
              ].map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  className={`shadow-none bg-transparent text-zinc-700
             rounded-none hover:bg-zinc-50 ${item.label.toLowerCase() === value && 'border-b-2'}
            `}
                  onClick={() => setValue(item.label.toLowerCase())}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InpatientVisits;
