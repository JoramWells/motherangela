'use client';

import moment from 'moment';
import React, { Usable } from 'react';
import { useGetAppointmentQuery } from '@/api/appointments/appointments.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Diagnoses',
    link: '',
  },
];

function AppointmentDetail({ params }:{params:Usable<{id: string}>}) {
  const { id } = React.use(params);
  const { data } = useGetAppointmentQuery(id);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <div className="bg-white border rounded-lg w-1/2 flex flex-col space-y-1">
          <div
            className="p-2 border-b border-slate-200"
          >
            <p>{`${data?.patient_detail?.first_name} ${data?.patient_detail?.middle_name}`}</p>
          </div>
          {/*  */}
          <div className="flex flex-row justify-between p-2 text-[14px]">
            <p className="text-slate-500">Date</p>
            <p>{moment(data?.appointment_date).format('ll')}</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between p-2 text-[14px]">
            <p className="text-slate-500">Charges</p>
            <p className="font-semibold text-slate-700">
              {data?.charges ?? 'No Charges'}
              {' '}
              /=
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentDetail;
