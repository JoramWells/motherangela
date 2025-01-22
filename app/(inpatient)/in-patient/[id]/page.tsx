'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { use, useMemo } from 'react';
import moment from 'moment';
import { ArrowRight, PackageOpen, PlusIcon } from 'lucide-react';
import { useGetAdmissionQuery } from '@/api/admission/admissions.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { Button } from '@/components/ui/button';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetInpatientTreatmentChartsByPatientIDQuery } from '@/api/admission/inpatient-treatment-chart.api';
import { inpatientTreatmentDetailChartColumn } from '../../column';
import TableContainer from '@/components/custom/table/TableContainer';

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

  const {
    data: treatmentData, search, setSearch, total,
  } = usePaginatedSearch({
    fetchQuery: useGetInpatientTreatmentChartsByPatientIDQuery,
    patient_id: patient_id as string,
    id,

  });

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

        <div
          className="flex-1"
        >
          <div className="bg-white mb-2 p-2 flex justify-between items-center rounded-lg">
            <p className="text-zinc-700">Admission Details</p>
            <div
              className="flex space-x-2"
            >
              <Button
                size="sm"
                className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                onClick={() => router.push(`/in-patient/${id}/visits?patient_id=${patient_id}`)}
              >
                Visits
              </Button>
              <div>
                {data?.discharge_date
                  ? (
                    <p>
                      {moment(data.discharge_date).format('ll')}
                    </p>
                  )

                  : (
                    <Button
                      className="shadow-none text-orange-500 border-orange-500 hover:bg-orange-50 hover:text-orange-500"
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
          <div
            className="flex-1 flex space-x-2 items-start"
          >
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
                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between">
                  <p className="text-zinc-500">Category:</p>
                  <p>{data?.admission_category?.admission_category_description}</p>
                </div>
                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between">
                  <p className="text-zinc-500">Admitted By:</p>
                  <p>{data?.user?.full_name}</p>
                </div>
                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between">
                  <p className="text-zinc-500">Admission Date :</p>
                  <div className="text-zinc-500">
                    <p>{moment(data?.admission_date).format('ll')}</p>
                  </div>
                </div>
                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between items-center">
                  <p className="text-zinc-500">No of Days :</p>

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

                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between">
                  <p className="text-zinc-500">Ward :</p>
                  <p>{data?.ward?.ward_description}</p>
                </div>
                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between">
                  <p className="text-zinc-500">Bed No. :</p>
                  <p>{data?.ward_bed?.bed_number}</p>
                </div>
                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between">
                  <p className="text-zinc-500">Daily Bed Rate :</p>
                  <p>{data?.daily_bed_rate}</p>
                </div>

                <hr className="border-zinc-100" />
                <div className=" p-2 text-[12px] flex flex-row justify-between">
                  <p className="text-zinc-500">Bed Billing Type :</p>
                  <p>{data?.admission_bed_billing_type?.bed_billing_type_description}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" mt-2"
          >

            {treatmentData.length > 0
              ? (
                <TableContainer
                  title="Treatment Chart"
                  columns={inpatientTreatmentDetailChartColumn}
                  data={treatmentData}
                  total={total as number}
                  search={search}
                  setSearch={setSearch}
                  rightLabel={(
                    <Button
                      size="sm"
                      className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                    >
                      NEW
                    </Button>
              )}
                />
              )
              : (
                <div
                  className="flex justify-center items-center"
                >
                  <div
                    className="h-[150px] border w-full flex items-center justify-center rounded-lg flex-col text-zinc-500 border-zinc-100 bg-white space-y-1"
                  >
                    <PackageOpen size={32} />
                    <p className="font-semibold text-[14px]">
                      No Treatment Chart !!

                    </p>
                    <Button
                      size="sm"
                      className="shadow-none hover:bg-blue-50 text-blue-500 border-blue-200 hover:text-blue-500"
                      variant="outline"
                    >
                      <PlusIcon />
                      NEW
                    </Button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InpatientDetail;
