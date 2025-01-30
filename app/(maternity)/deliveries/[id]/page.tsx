'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { ArrowRight } from 'lucide-react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetMaternityDeliveryQuery } from '@/api/maternity/maternity-deliveries.api';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Deliveries',
    link: '',
  },
];

function MaternityDetail({ params }:{params: Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetMaternityDeliveryQuery(id);
  console.log(data);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2 flex flex-row space-x-2 items-start ">
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
          <p
            className="text-[14px] font-semibold text-zinc-700"
          >
            {data?.maternity_profile?.name_of_client}
          </p>
          <div className="flex flex-col items-center justify-center w-full">
            {data?.maternity_profile?.patient_detail

              ? (
                <p>
                  Profile
                </p>
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
        <div
          className="flex-1 flex flex-row space-x-2 items-start"
        >
          <div className="border border-zinc-100 flex-1 rounded-lg flex bg-white  flex-col space-y-1">
            <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200  ">
              <p
                className="text-[14px] font-semibold text-zinc-700"
              >
                Delivery Details
              </p>
            </div>

            <div className="flex flex-row  p-1 pl-2 pr-2 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Conducted By :</p>
              <p className="font-semibold text-zinc-700">{data?.conducted_by}</p>
            </div>

            <hr />

            <div className="flex flex-row pl-2 pr-2 p-1 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Duration of Pregnancy :</p>
              <p className="font-semibold text-zinc-700">{data?.duration_of_pregnancy}</p>
            </div>

            {/*  */}
            <hr />

            <div className="flex flex-row pl-2 pr-2 p-1 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Date of Delivery :</p>
              <p className="font-semibold text-zinc-700">{moment(data?.date_of_delivery).format('ll')}</p>
            </div>

            {/*  */}
            <hr />

            <div className="flex flex-row pl-2 pr-2 p-1 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Place of Delivery :</p>
              <p className="font-semibold text-zinc-700">{data?.place_of_delivery}</p>
            </div>

            {/*  */}
            <hr />

            <div className="flex flex-row pl-2 pr-2 p-1 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Condition of mother :</p>
              <p className="font-semibold text-zinc-700">{data?.condition_of_mother}</p>
            </div>
            <hr />

            <div className="flex flex-row pl-2 pr-2 p-1 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Mode of delivery :</p>
              <p className="font-semibold text-zinc-700">{data?.mode_of_delivery}</p>
            </div>
            <hr />
            <div
              className="p-1 pl-2 pr-2 flex justify-end"
            >
              <Button
                size="sm"
                variant="outline"
                className="shadow-none text-cyan-600 border-cyan-100 hover:bg-cyan-50 hover:text-cyan-700"
              >
                View Maternity Profile
                <ArrowRight />
              </Button>
            </div>
          </div>

          {/*  */}

          <div className="flex-1  bg-white rounded-lg border border-zinc-100">
            <div
              className="p-2 bg-zinc-50 rounded-t-lg border-b"
            >
              <p
                className="text-[14px] font-semibold text-zinc-700"
              >
                Medical Information
              </p>
            </div>
            <div className="">
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">AGPAR</p>
                <p className="font-semibold text-zinc-700">
                  {/* {data?.blood_transfusion ?? 'No Transfusion'} */}
                </p>
              </div>

              <hr />

              {/*  */}

              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">AZT Dose</p>
                <p className="font-semibold text-zinc-700">
                  {data?.azt_single_dose ?? 'No Diabetes'}
                </p>
              </div>

              <hr />

              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Blood Loss</p>
                <p className="font-semibold text-zinc-700">
                  {data?.blood_loss ?? 'No Blood Loss'}
                </p>
              </div>

              {/*  */}
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">NVP Single Dose</p>
                <p className="font-semibold text-zinc-700">{data?.nvp_single_dose}</p>
              </div>

              {/*  */}
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Oxytocin</p>
                <p className="font-semibold text-zinc-700">{data?.oxytocin}</p>
              </div>

              {/*  */}
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Resuscitation Done</p>
                <p className="font-semibold text-zinc-700">
                  {data?.rescuscitation_done}
                </p>
              </div>
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Teo</p>
                <p className="font-semibold text-zinc-700">{data?.teo}</p>
              </div>

              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Vitamin A / B</p>
                <p className="font-semibold text-zinc-700">
                  {data?.vitamin_a}
                  {' '}
                  /
                  {' '}
                  {data?.vitamin_k}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaternityDetail;
