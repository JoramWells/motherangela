'use client';

import React, { use, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Trash2Icon, XIcon } from 'lucide-react';
import moment from 'moment';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetInternalLabRequestQuery } from '@/api/lab/internalLabRequests.api';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { formatCurrency } from '@/utils/number';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CustomSheet from '@/components/custom/nav/CustomSheet';
import CollectLabSample from '@/components/custom/lab/CollectLabSample';

function RequestDetailsPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const patient_id = searchParams.get('patient_id');
  const { data } = useGetInternalLabRequestQuery(id, {
    skip: !id,
  });

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
      label: 'Procedure Results',
      link: '',
    },
    {
      id: '3',
      label: first_name!,
      link: '',
    },
    {
      id: '4',
      label: 'Info',
      link: '',
    },
  ], [first_name]);

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
            className="p-1 pl-2 pr-2 bg-white rounded-lg flex flex-row items-center justify-between"
          >

            <p
              className=""
            >
              Procedure Details

            </p>
            <CustomSheet
              label="Sample"
              title="Colleted Lab Results"
            //   description="Save collected lab results"
            >
              <CollectLabSample
                request_id={id}
              />
            </CustomSheet>
          </div>
          <div
            className="flex-1 flex space-x-2 items-start"
          >
            <div
              className="flex-1 bg-white mt-2 border rounded-lg border-zinc-100"
            >
              <div className="p-1 pl-2 pr-2 bg-zinc-50 rounded-t-lg text-[14px] font-semibold
            border-b flex justify-between items-center
            "
              >
                <p>
                  Procedure
                </p>
                <div
                  className="flex flex-row space-x-2 items-center"
                >
                  {data?.status === 1
                    ? (
                      <Badge
                        className="shadow-none bg-emerald-50 text-emerald-500
                    hover:bg-emerald-100
                    "
                      >
                        Completed
                      </Badge>
                    )
                    : (
                      <Badge
                        className="shadow-none bg-orange-50 text-orange-500
                    hover:bg-orange-100
                    "
                      >
                        Pending
                      </Badge>
                    )}
                  <Button
                    size="sm"
                    title="Delete this lab request"
                    className="shadow-none bg-red-50 text-red-500 hover:bg-red-100"
                  >
                    <Trash2Icon />
                  </Button>

                </div>
              </div>
              <div
                className="flex justify-between items-center text-[12px] p-2"
              >
                <p className="text-zinc-500">Name :</p>
                <p
                  className="font-semibold text-zinc-700"
                >
                  {data?.procedure_detail?.procedure_name}
                </p>
              </div>
              <hr className="border-zinc-100 mr-2 ml-2" />
              <div
                className="flex justify-between items-center text-[12px] p-2"
              >
                <p className="text-zinc-500">Date Requested :</p>
                <p
                  className=" text-zinc-500"
                >
                  {moment(data?.date_of_request).format('ll')}
                </p>
              </div>
              <hr className="border-zinc-100 mr-2 ml-2" />
              <div
                className="flex justify-between items-center text-[12px] p-2"
              >
                <p className="text-zinc-500">Cost :</p>
                <p
                  className="font-semibold text-zinc-700"
                >
                  KSH:
                  {' '}
                  {formatCurrency(data?.procedure_detail?.procedure_cost ?? 0)}
                  /=
                </p>
              </div>

              {/*  */}
              <hr className="border-zinc-100 mr-2 ml-2" />
              <div
                className="flex justify-between items-center text-[12px] p-2"
              >
                <p className="text-zinc-500">Pay Status :</p>
                {data?.pay_status === 1
                  ? (
                    <Badge
                      className="shadow-none bg-emerald-50 text-emerald-500
                    hover:bg-emerald-100
                    "
                    >
                      Paid
                    </Badge>
                  )
                  : (
                    <Badge
                      className="shadow-none bg-zinc-50 text-zinc-500
                    hover:bg-zinc-100
                    "
                    >
                      <XIcon size={14} />
                      Paid
                    </Badge>
                  )}

              </div>
              <hr className="border-zinc-100 mr-2 ml-2" />

              <div
                className="flex justify-between items-center text-[12px] p-2"
              >
                <p className="text-zinc-500">Results :</p>
                <p
                  className=" text-zinc-700"
                >
                  {data?.results}
                </p>
              </div>

            </div>

            <div
              className="flex-1 bg-white mt-2 rounded-lg p-2"
            >
              Items Used
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDetailsPage;
