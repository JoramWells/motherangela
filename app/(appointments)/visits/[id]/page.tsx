'use client';

import moment from 'moment';
import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetAppointmentQuery } from '@/api/appointments/appointments.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/number';

function AppointmentDetail({ params }:{params:Promise<{id: string}>}) {
  const { id } = React.use(params);
  const searchParams = useSearchParams();
  const patient_id = searchParams.get('patient_id');
  const { data } = useGetAppointmentQuery(id);

  const { data: patientData } = useGetPatientQuery(patient_id as string, {
    skip: !patient_id,
  });

  const {
    cell_phone, dob, first_name, in_patient_file_no, middle_name, out_patient_file_no,
  } = patientData || {};

  const listItems = useMemo(() => [
    {
      id: '1',
      label: 'home',
      link: '/',
    },
    {
      id: '2',
      label: 'Recent Visits',
      link: '',
    },
    {
      id: '3',
      label: first_name as string,
      link: '',
    },
  ], [first_name]);

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
          <div className="flex-1 flex space-x-2 items-start">
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
                  {data?.user?.full_name}
                </p>
              </div>
              <hr className="border-zinc-100" />
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Consultation Type</p>
                <p
                  className="text-zinc-500"
                >
                  {data?.consultation_types_group?.consultation_type_group_description}
                </p>
              </div>
              <hr className="border-zinc-100" />
              {/*  */}
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Date</p>
                <p
                  className="font-semibold"
                >
                  {moment(data?.appointment_date).format('ll')}
                </p>
              </div>
              <hr className="border-zinc-100" />
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px] items-center">
                <p className="text-zinc-500">Status</p>
                <Badge
                  className="bg-zinc-200 shadow-none text-zinc-700 hover:bg-zinc-50"
                >
                  {data?.appointment_status}
                </Badge>
              </div>

            </div>

            {/*  */}
            <div className="bg-white border border-zinc-100 rounded-lg flex-1 flex flex-col space-y-1">
              <div
                className="p-2 border-b border-zinc-200 text-zinc-700 text-[14px] bg-zinc-50 rounded-t-lg font-semibold"
              >
                Payment Details
              </div>
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Charges</p>
                <p
                  className="text-zinc-700 font-semibold"
                >
                  {formatCurrency(data?.charges ?? 0)}
                  {' '}
                  /=
                </p>
              </div>
              <hr className="border-zinc-100" />
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Insurance</p>
                <p
                  className="text-zinc-500"
                >
                  {data?.insurance_detail?.insurance_name}
                </p>
              </div>
              <hr className="border-zinc-100" />
              {/*  */}
              <div className="flex flex-row justify-between p-1 pl-2 pr-2 text-[12px]">
                <p className="text-zinc-500">Invoice No.</p>
                <p
                  className="text-zinc-500"
                >
                  {data?.invoice_no}
                </p>
              </div>

              <div
                className="justify-end flex p-1 border-t"
              >
                <Button
                  size="sm"
                  className="shadow-none"
                  variant="link"
                >
                  View In Accounts
                </Button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default AppointmentDetail;
