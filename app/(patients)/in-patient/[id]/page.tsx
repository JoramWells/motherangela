'use client';

import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import moment from 'moment';
import { ArrowRight } from 'lucide-react';
import { useGetAdmissionQuery } from '@/api/admission/admissions.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { Button } from '@/components/ui/button';

function InpatientDetail() {
  // const { id } = use(params);
  const pageParams = useSearchParams();
  const admission_id = pageParams.get('admission_id');

  const { data } = useGetAdmissionQuery(admission_id as string, {
    skip: !admission_id,
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

  console.log(data);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2 flex flex-row space-x-2 items-start">
        <div
          className="flex-1 bg-white rounded-lg border border-zinc-100"
        >
          <div
            className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200"
          >
            <p
              className="text-[14px] font-semibold text-zinc-700"
            >
              Personal Details
            </p>
          </div>
          <div className="">
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Patient Name :</p>
              <p
                className="font-semibold text-zinc-700"
              >
                {`${data?.patient_detail?.first_name} ${data?.patient_detail?.middle_name}`}

              </p>
            </div>
            <hr />
            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Gender :</p>
              <div>{data?.patient_detail?.patient_gender === '0' ? <p>Male</p> : <p>Female</p>}</div>
            </div>
            <hr />

            <div className=" p-2 text-[12px] flex flex-row justify-between">
              <p className="text-zinc-500">Phone No. :</p>
              <p>{data?.patient_detail?.cell_phone}</p>
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
              <p>{data?.admission_bed_billing_type?.bed_billing_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InpatientDetail;
