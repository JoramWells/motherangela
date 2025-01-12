'use client';

import React, { Usable, use } from 'react';
import moment from 'moment';
import { useGetMaternityProfileQuery } from '@/api/maternity/maternity.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { Collapsible } from '@/components/custom/nav/Collapsible';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Payroll Records',
    link: '',
  },
];

function MaternityDetail({ params }:{params: Usable<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetMaternityProfileQuery(id);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <div className="border w-1/2 rounded-lg flex  flex-col space-y-1">
          <div className="p-2">
            <p>{data?.name_of_client}</p>
          </div>

          <div className="flex flex-row p-2 justify-between items-center text-[12px]">
            <p className="text-zinc-500">ANC Number</p>
            <p className="font-semibold text-zinc-700">{data?.anc_number}</p>
          </div>

          <hr />
        </div>

        {/*  */}
        {/* <div className="border w-1/2 rounded-lg flex  flex-col space-y-1 mt-2">
          <div className="p-2">
            <p>Medical File</p>
          </div>

          <hr />
        </div> */}
        <div className="w-1/2 p-2 bg-white mt-2">
          <Collapsible label="Medical File">
            <div className="bg-white">
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Blood Transfusion</p>
                <p className="font-semibold text-zinc-700">
                  {data?.blood_transfusion ?? 'No Transfusion'}
                </p>
              </div>

              <hr />

              {/*  */}

              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Diabetes</p>
                <p className="font-semibold text-zinc-700">
                  {data?.diabetes ?? 'No Diabetes'}
                </p>
              </div>

              <hr />

              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Drug Allergies</p>
                <p className="font-semibold text-zinc-700">
                  {data?.drug_allergies ?? 'No Allergies'}
                </p>
              </div>

              {/*  */}
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Expected Date of Delivery</p>
                <p className="font-semibold text-zinc-700">{moment(data?.edd).format('ll')}</p>
              </div>

              {/*  */}
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Height</p>
                <p className="font-semibold text-zinc-700">{data?.height}</p>
              </div>

              {/*  */}
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Hypertension</p>
                <p className="font-semibold text-zinc-700">
                  {data?.hypertension}
                </p>
              </div>

              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Last Monthly Period (lmp)</p>
                <p className="font-semibold text-zinc-700">{moment(data?.lmp).format('ll')}</p>
              </div>

              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Parity</p>
                <p className="font-semibold text-zinc-700">
                  {data?.parity}
                </p>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
}

export default MaternityDetail;
