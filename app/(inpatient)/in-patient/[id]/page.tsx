'use client';

import { useSearchParams } from 'next/navigation';
import React, { use, useMemo } from 'react';
import moment from 'moment';
import { ArrowRight } from 'lucide-react';
import { useGetAdmissionQuery } from '@/api/admission/admissions.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { Button } from '@/components/ui/button';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';

function InpatientDetail({ params }:{params:Promise<{id: string}>}) {
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
  ], [data]);

  const {
    cell_phone, dob, first_name, in_patient_file_no, middle_name, out_patient_file_no,
  } = patientData || {};
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
        <div
          className="flex-1 bg-white rounded-lg border border-zinc-100"
        >
          <div
            className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200"
          >
            <p
              className="text-[14px] font-semibold text-zinc-700"
            >
              Admission Details
            </p>
          </div>
          <div className="">
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Type:</p>
              <p>{data?.admission_type?.admission_type_description}</p>
            </div>
            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Category:</p>
              <p>{data?.admission_category?.admission_category_description}</p>
            </div>
            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Admitted By:</p>
              <p>{data?.user?.full_name}</p>
            </div>
            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Admission Date :</p>
              <div className="text-zinc-500">
                <p>{moment(data?.admission_date).format('ll')}</p>
                <p>{data?.admission_time}</p>
              </div>
            </div>
            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between items-center">
              <p className="text-zinc-500">Discharge Date :</p>
              <div>
                {data?.discharge_date
                  ? (
                    <p>
                      {moment(data.discharge_date).format('ll')}
                    </p>
                  )

                  : (
                    <Button
                      className="shadow-none text-sky-500 border-sky-500"
                      size="sm"
                      variant="outline"
                    >
                      Discharge
                      <ArrowRight />
                    </Button>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div
          className="flex-1 bg-white rounded-lg border border-zinc-100"
        >
          <div
            className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200"
          >
            <p
              className="text-[14px] font-semibold text-zinc-700"
            >
              Ward Details
            </p>
          </div>
          <div className="">
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Type :</p>
              <p>{data?.admission_type?.admission_type_description}</p>
            </div>

            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Ward :</p>
              <p>{data?.ward?.ward_description}</p>
            </div>
            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Bed No. :</p>
              <p>{data?.ward_bed?.bed_number}</p>
            </div>
            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Daily Bed Rate :</p>
              <p>{data?.daily_bed_rate}</p>
            </div>

            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Bed Billing Type :</p>
              <p>{data?.admission_bed_billing_type?.bed_billing_type_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InpatientDetail;
