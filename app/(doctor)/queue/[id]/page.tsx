'use client';

import React, { use, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { Button } from '@/components/ui/button';
import CustomDialog from '@/components/custom/CustomDialog';
import NewPrescription from '@/components/custom/medicine/NewPrescription';
import InternalLabRequest from '@/components/custom/lab/InternalLabRequest';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Queue',
    link: '',
  },
];

function DoctorPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const patient_id = searchParams.get('patient_id');
  const { data: patientData } = useGetPatientQuery(patient_id as string, {
    skip: !patient_id,
  });

  const {
    cell_phone, dob, first_name, in_patient_file_no, middle_name, out_patient_file_no,
  } = patientData || {};

  const [tabValue, setTabValue] = useState('');

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

        <div className="h-[50vh] border-l" />

        <div className="flex-1">
          <div
            className="p-2 bg-white rounded-lg font-semibold text-zinc-700 flex flex-row justify-between items-center"
          >
            <p>
              Doctors Diagnosis
            </p>
            <Button
              size="sm"
              className="shadow-none bg-emerald-600 hover:bg-emerald-700"
            >
              Save
            </Button>
          </div>
          <div className="pt-2">
            <div className="p-1 bg-white flex flex-row space-x-2 rounded-lg ">
              {[{ id: 1, label: 'Pharmacy' }, {
                id: 2,
                label: 'Lab',
              },
              {
                id: 3,
                label: 'Radiology',
              },
              ].map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  className={`shadow-none ${item.label === tabValue ? 'bg-zinc-100 text-zinc-700' : 'bg-zinc-50 text-zinc-500 '}  hover:bg-zinc-50  `}
                  onClick={() => setTabValue(item.label)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <div
              className="border rounded-lg mt-2 bg-white"
            >
              {tabValue === 'Pharmacy'
                && (
                <div>
                  <div className="flex justify-between items-center bg-zinc-50 p-1 pl-2 pr-2 rounded-t-lg ">
                    <p className="text-[14px] font-semibold">
                      Internal Pharmacy
                    </p>
                    <CustomDialog
                      label="NEW"
                      description="Add New Prescription"
                    >
                      <NewPrescription />

                    </CustomDialog>

                  </div>
                  <div
                    className="p-2"
                  >
                    <p>
                      No Pharmacy Requests
                    </p>
                  </div>
                </div>
                )}

              {/*  */}
              {tabValue === 'Lab'
                && (
                <div>
                  <div className="flex justify-between items-center bg-zinc-50 p-1 pl-2 pr-2 rounded-t-lg ">
                    <p className="text-[14px] font-semibold">
                      Internal Lab Request
                    </p>
                    <CustomDialog
                      label="NEW"
                      description="Add New Lab Request"
                    >
                      <InternalLabRequest
                        appointment_id={id}
                        patient_id={patient_id!}
                      />

                    </CustomDialog>

                  </div>
                  <div
                    className="p-2"
                  >
                    <p>
                      No Pharmacy Requests
                    </p>
                  </div>
                </div>
                )}
            </div>
          </div>
          <div>footer</div>

        </div>

      </div>
    </div>
  );
}

export default DoctorPage;
