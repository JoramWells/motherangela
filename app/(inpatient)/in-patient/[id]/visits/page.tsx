'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { use, useMemo, useState } from 'react';
import { PackageOpen } from 'lucide-react';
import { useGetAdmissionQuery } from '@/api/admission/admissions.api';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { Button } from '@/components/ui/button';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetInpatientDoctorVisitsByPatientIDQuery } from '@/api/admission/inpatient-doctor-visits.api';
import TableContainer from '@/components/custom/table/TableContainer';
import { inpatientDoctorVisitColumns, inpatientNurseVisitColumns } from '@/app/(inpatient)/column';
import { useGetInpatientNurseVisitsByPatientIDQuery } from '@/api/admission/inpatient-nurse-visits.api';

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

  const {
    data: doctorVisits, search: searchDoctor, setSearch: setSearchDoctor,
    total: doctorTotal,
  } = usePaginatedSearch({
    fetchQuery: useGetInpatientDoctorVisitsByPatientIDQuery,
    patient_id: patient_id as string,
    id,
  });

  const { data: nurseData, total: nurseTotal } = usePaginatedSearch({
    fetchQuery: useGetInpatientNurseVisitsByPatientIDQuery,
    patient_id: patient_id as string,

    id,
  });

  console.log(nurseData);

  const router = useRouter();

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

            {/*  */}
            <div className="p-2">
              {value === 'doctor'
&& (
<div>
    {
        doctorVisits.length > 0
          ? (
            <TableContainer
              title="Doctor Visits"
              columns={inpatientDoctorVisitColumns}
              data={doctorVisits}
              search={searchDoctor}
              total={doctorTotal as number}
              setSearch={setSearchDoctor}
              rightLabel={(
                <Button
                  className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                  size="sm"
                  onClick={() => router.push(`/in-patient/${id}/visits/add-doctor-visit`)}
                >
                  NEW
                </Button>
                  )}
            />
          )
          : (
            <div
              className="border p-4 rounded-lg flex flex-col justify-center items-center text-zinc-500 space-y-1 bg-white border-zinc-100"
            >
              <PackageOpen size={28} />
              <p
                className="text-[14px] font-semibold"
              >
                No Doctor Visits
              </p>
              <Button
                className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                size="sm"
                onClick={() => router.push(`/in-patient/${id}/visits/add-doctor-visit`)}
              >
                NEW
              </Button>
            </div>
          )
    }
</div>
)}

              {/*  */}
              {value === 'nurse'
&& (
<div>
    {
        nurseData.length > 0
          ? (
            <TableContainer
              title="Nurse Visits"
              columns={inpatientNurseVisitColumns}
              data={nurseData}
              search={searchDoctor}
              total={nurseTotal as number}
              setSearch={setSearchDoctor}
              rightLabel={(
                <Button
                  className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                  size="sm"
                  onClick={() => router.push(`/in-patient/${id}/visits/add-doctor-visit`)}
                >
                  NEW
                </Button>
                  )}
            />
          )
          : (
            <div
              className="border p-4 rounded-lg flex flex-col justify-center items-center text-zinc-500 space-y-1 bg-white border-zinc-100"
            >
              <PackageOpen size={28} />
              <p
                className="text-[14px] font-semibold"
              >
                No Nurse Visits !!
              </p>
              <Button
                className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                size="sm"
                onClick={() => router.push(`/in-patient/${id}/visits/add-doctor-visit`)}
              >
                NEW
              </Button>
            </div>
          )
    }
</div>
)}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default InpatientVisits;
