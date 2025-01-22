'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetInternalPharmacyRequestQuery } from '@/api/medication/internalPharmacyRequest.api';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Requests',
    link: '',
  },
];
function RequestDetails({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetInternalPharmacyRequestQuery(id, {
    skip: !id,
  });

  console.log(data);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2 flex flex-row space-x-2 items-start"
      >
        <div className="w-1/4 bg-white p-4 rounded-lg flex flex-col items-center space-y-2">
          <Image
            src="/assets/img/profile.png"
            alt="profile"
            width={60}
            height={60}
            className="rounded-full"
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
            }}
          />

          <div className="flex flex-col items-center justify-center w-full">
            {data?.patient_detail?.middle_name

              ? (
                <div className="flex flex-col items-center justify-center">
                  <p
                    className="text-[14px] font-semibold text-zinc-700"
                  >
                    {data?.patient_detail?.first_name}
                    {' '}
                    {data?.patient_detail?.middle_name}
                  </p>
                  <p
                    className="text-[12px] font-semibold text-zinc-700"
                  >
                    {data.patient_detail.patient_gender === '0'
                      ? 'Male' : 'Female'}
                  </p>

                  {/*  */}
                  <p
                    className="text-[12px] font-semibold text-zinc-700"

                  >
                    {data.patient_detail?.cell_phone}
                  </p>
                  <p
                    className="text-[12px] font-semibold text-zinc-700"
                  >
                    DOB:
                    {' '}
                    {data.patient_detail?.dob}
                  </p>
                </div>
              )
              : (
                <Link
                  href="/"
                  className="text-[12px] text-sky-600 underline hover:text-sky-700 "
                >
                  Update Patient profile
                </Link>
              )}
          </div>
        </div>

        <div className="h-[50vh] border-l" />
        {/*  */}

        <div className="flex-1">
          <div
            className="bg-white w-1/2 p-4 rounded-lg flex flex-col space-y-2 items-center justify-center"
          >
            <p className="text-[12px] font-semibold text-zinc-700">
              {data?.medication?.medication_name}
            </p>
            <p
              className="text-[12px] text-zinc-500"
            >
              Qty:
              {' '}
              {data?.quantity}
            </p>
            <p
              className="text-zinc-500 text-[12px]"
            >
              Instructions:
              {' '}
              {data?.prescription_term}
            </p>
            <p
              className="text-zinc-500 text-[12px]"

            >
              No of Days:
              {' '}
              {data?.number_of_days}
            </p>
            <p
              className="text-zinc-500 text-[12px]"

            >
              Unit Price:
              {' '}
              {data?.cost}
            </p>
            <p
              className="text-zinc-500 text-[12px]"

            >
              Total:
              {' '}
              {Number(data?.quantity) * Number(data?.cost)}
            </p>
            <Button
              size="sm"
              className="shadow-none bg-emerald-600 hover:bg-emerald-700"
              // variant="outline"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
