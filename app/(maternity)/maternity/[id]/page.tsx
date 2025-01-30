'use client';

import React, { use, useMemo } from 'react';
import moment from 'moment';
import { TriangleAlert } from 'lucide-react';
import { useGetMaternityProfileQuery } from '@/api/maternity/maternity.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAntenatalMaternityProfileByMaternityIDQuery } from '@/api/maternity/maternity-antenantal-profile.api';
import { Button } from '@/components/ui/button';
import { useGetMaternityDeliveryByMaternityIDQuery } from '@/api/maternity/maternity-deliveries.api';

function MaternityDetail({ params }:{params: Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetMaternityProfileQuery(id);
  const listItems = useMemo(() => [
    {
      id: '1',
      label: 'home',
      link: '/',
    },
    {
      id: '2',
      label: 'Maternity',
      link: '/maternity',
    },
    {
      id: '3',
      label: `${data?.name_of_client}`,
      link: '',
    },
  ], [data]);

  const { data: antenatalProfileData } = useGetAntenatalMaternityProfileByMaternityIDQuery(id, {
    skip: !id,
  });

  const { data: deliveryData } = useGetMaternityDeliveryByMaternityIDQuery(id, {
    skip: !id,
  });

  console.log(deliveryData);

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="mt-2 mb-2">
        <div
          className="bg-white p-2 flex flex-row justify-between items-center"
        >
          <p>Maternity Profile</p>
          <div
            className="flex flex-row space-x-2"
          >
            {(data?.edd === null || data?.edd?.toString()?.toString()?.length as number < 0)
              ? (
                <Button
                  className="shadow-none bg-sky-600 hover:bg-sky-700"
                  size="sm"
                >
                  Update EDD
                </Button>
              )
              : (
                <div>

                  {moment(data?.edd, 'DD/MM/YYYY').isBefore(moment(), 'day') && !deliveryData
                    ? (
                      <div
                        className="flex flex-row items-center space-x-2"
                      >
                        <TriangleAlert size={16} />
                        <p
                          className="text-[12px]"
                        >
                          Expected Delivery Date:
                          {' '}
                          {moment(data?.edd, 'DD/MM/YYYY').format('ll')}
                        </p>
                        <Button
                          size="sm"
                          variant="destructive"
                        >
                          Deliver
                        </Button>
                      </div>
                    )
                    : (
                      <p>
                        {moment(data?.edd?.toString().trim(), 'DD/MM/YYYY').format('ll')}
                      </p>
                    )}
                </div>
              )}
          </div>
        </div>
      </div>
      <div className="p-2 flex flex-row space-x-2 items-start">
        <div
          className="w-1/4 bg-white rounded-lg border border-zinc-100"
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
          {data?.patient_detail?.patient_id

            ? (
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
            )
            : (
              <div className="flex items-center justify-center h-full flex-col p-4">
                <TriangleAlert className="text-red-500" />
                <p className="text-[14px] font-semibold text-zinc-700 capitalize">
                  This patient has no profile
                </p>
                <p
                  className="text-[12px] text-cyan-500 underline"
                >
                  Add Patient Profile
                </p>
              </div>
            )}
        </div>
        <div className="h-[75vh] border-l" />
        <div
          className="grid grid-cols-2 gap-2 flex-1"
        >
          <div className="border flex-1 rounded-lg flex bg-white  flex-col border-zinc-100 ">
            <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200">
              <p
                className="text-[14px] font-semibold text-zinc-700"
              >
                Maternity Profile
              </p>
            </div>

            <div className="flex flex-row p-2 justify-between items-center text-[12px]">
              <p className="text-zinc-500">ANC Number</p>
              <p className="font-semibold text-zinc-700">{data?.anc_number}</p>
            </div>

            <hr />
            <div className="flex flex-row p-2 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Gravida</p>
              <p className="font-semibold text-zinc-700">{data?.gravida}</p>
            </div>

            {/*  */}
            <hr />
            <div className="flex flex-row p-2 justify-between items-center text-[12px]">
              <p className="text-zinc-500">Parity</p>
              <p className="font-semibold text-zinc-700">{data?.parity}</p>
            </div>
            <hr />
            <div className="flex flex-row p-2 justify-between items-center text-[12px]">
              <p className="text-zinc-500">EDD</p>
              <p className="font-semibold text-zinc-700">{moment(data?.edd).format('ll')}</p>
            </div>

            {/*  */}
            <hr />
            {/*  */}
            <div className="flex flex-row p-2 justify-between items-center text-[12px]">
              <p className="text-zinc-500">LMP</p>
              <p className="font-semibold text-zinc-700">{moment(data?.lmp).format('ll')}</p>
            </div>
          </div>

          {/*  */}
          <div className="flex-1 bg-white rounded-lg border border-zinc-100">
            <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200">
              <p
                className="text-[14px] font-semibold text-zinc-700"
              >
                Medical File
              </p>
            </div>
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
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Height</p>
                <p className="font-semibold text-zinc-700">{data?.height}</p>
              </div>

              {/*  */}
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Hypertension</p>
                <p className="font-semibold text-zinc-700">
                  {data?.hypertension}
                </p>
              </div>

            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg border border-zinc-100">
            <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200">
              <p
                className="text-[14px] font-semibold text-zinc-700"
              >
                Antenatal Profile
              </p>
            </div>
            {antenatalProfileData
              ? (
                <div className="bg-white">
                  <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                    <p className="text-zinc-500">Blood Group</p>
                    <p className="font-semibold text-zinc-700">
                      {antenatalProfileData?.blood_group ?? 'No Transfusion'}
                    </p>
                  </div>

                  <hr />

                  {/*  */}

                  <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                    <p className="text-zinc-500">HB</p>
                    <p className="font-semibold text-zinc-700">
                      {antenatalProfileData?.hb ?? 'No HB'}
                    </p>
                  </div>

                  <hr />

                  {/*  */}
                  <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                    <p className="text-zinc-500">HIV</p>
                    <p className="font-semibold text-zinc-700">
                      {antenatalProfileData?.hiv ?? 'No Tests'}
                    </p>
                  </div>

                  {/*  */}

                  {/*  */}
                  <hr />
                  {/*  */}
                  <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                    <p className="text-zinc-500">Rhesus</p>
                    <p className="font-semibold text-zinc-700">{antenatalProfileData?.rhesus}</p>
                  </div>

                  {/*  */}
                  <hr />
                  {/*  */}
                  <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                    <p className="text-zinc-500">Serology</p>
                    <p className="font-semibold text-zinc-700">
                      {antenatalProfileData?.serology}
                    </p>
                  </div>
                  {/*  */}
                  <hr />
                  <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                    <p className="text-zinc-500">Urinalysis</p>
                    <p className="font-semibold text-zinc-700">
                      {antenatalProfileData?.urinalysis}
                    </p>
                  </div>
                </div>
              )
              : (
                <div className=" flex flex-col items-center justify-center mt-8">
                  <TriangleAlert size={18} />
                  <p
                    className="text-[14px] text-zinc-500"
                  >
                    This patient has no antenatal profile
                  </p>
                  <p
                    className="text-[12px] text-cyan-500 underline"
                  >
                    Update Profile
                  </p>
                </div>
              )}
          </div>
          <div className="flex-1 bg-white rounded-lg border border-zinc-100">
            <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-200">
              <p
                className="text-[14px] font-semibold text-zinc-700"
              >
                Family History
              </p>
            </div>
            <div className="bg-white">
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Diabetes</p>
                <p className="font-semibold text-zinc-700">
                  {data?.family_history_diabetes ?? 'No Diabetes'}
                </p>
              </div>

              <hr />

              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Tuberculosis</p>
                <p className="font-semibold text-zinc-700">
                  {data?.family_history_tuberculosis ?? 'No Tuberculosis'}
                </p>
              </div>

              {/*  */}

              {/*  */}
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Twins</p>
                <p className="font-semibold text-zinc-700">{data?.family_history_twins}</p>
              </div>

              {/*  */}
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Hypertension</p>
                <p className="font-semibold text-zinc-700">
                  {data?.hypertension}
                </p>
              </div>
              <hr />
              {/*  */}
              <div className="flex flex-row p-2 justify-between items-center text-[12px]">
                <p className="text-zinc-500">Surgical Operations</p>
                <p className="font-semibold text-zinc-700">
                  {data?.surgical_operations_history}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaternityDetail;
