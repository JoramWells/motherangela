'use client';

import React, { use, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import moment from 'moment';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPersonalAccountChargeQuery } from '@/api/accounts/charges/personalAccountCharges.api';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';

function PersonalChargesPayment({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const { data } = useGetPersonalAccountChargeQuery(id, {
    skip: !id,
  });
  console.log(data);

  const searchParams = useSearchParams();
  const patient_id = searchParams.get('patient_id');

  const { data: patientData } = useGetPatientQuery(patient_id as string, {
    skip: !patient_id,
  });

  //
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
        label: 'Personal Charges Payment',
        link: '/personal-account-charges',
      },
      {
        id: '3',
        label: `${first_name} ${middle_name} `,
        link: '',
      },
    ],
    [first_name, middle_name],
  );

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />

      <div className="p-2 flex space-x-2 items-start">
        <PatientSideProfile
          cell_phone={cell_phone!}
          dob={dob!}
          first_name={first_name!}
          in_patient_file_no={in_patient_file_no!}
          middle_name={middle_name!}
          out_patient_file_no={out_patient_file_no!}
        />
        <div className="h-[50vh] border-l" />
        <div className="flex-1 bg-white p-2 rounded-lg">
          <div className="border rounded-lg w-1/2 bg-white">
            <div className="rounded-t-lg bg-zinc-50 p-2">
              <p>Appointment Details</p>
            </div>
            <div className="flex justify-between items-center p-2 text-[12px]">
              <p
                className="text-zinc-500"
              >
                Appointment Date
              </p>
              <p
                className="text-[12px]"
              >
                {moment(data?.appointment?.appointment_date).format('ll')}
              </p>
            </div>
          </div>

          <div
            className="p-2 w-3/4 flex flex-col space-y-2"
          >
            <p
              className="text-[18px] text-zinc-500"
            >
              Service description
            </p>
            <hr />
            <p
              className="text-[12px] font-semibold"

            >
              {data?.service_desc}
            </p>
            <p
              className="text-[12px] font-semibold"
            >
              KSH
              {' '}
              {data?.amount}
              {' '}
              /=
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PersonalChargesPayment;
