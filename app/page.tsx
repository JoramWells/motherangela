/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { Suspense, useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Provider } from 'react-redux';
import { AppModuleInterface } from 'motherangela';
import Navbar from '@/components/custom/nav/Navbar';
import { UserProvider } from '@/context/UserContext';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllAppModulesQuery } from '@/api/app-modules/appModule.api';
import { store } from '@/lib/store';

const administrator: AppModuleInterface[] = [{
  id: '1',
  title: 'SuperAdmin',
  link: '/superadmin/app-modules',
  img: '/assets/img/superadmin.png',
  description: 'Manage user registration, medicine, schools...',
  isActive: true,
  createdAt: '',
  updatedAt: '',
  hospitalID: '18',
}];

const dtx = [
  {
    id: '1',
    link: '/superadmin/hospitals',
    label: 'Super Admin',
    url: '/assets/img/superadmin.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '2',
    link: '/administrator/pharmacy',
    label: 'Administrator',
    url: '/assets/img/admin.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '3',
    link: '/assets',
    label: 'Accounts',
    url: '/assets/img/cash.png',
    description: 'Lorem ipsum dolet Mwat!!',

  },
  {
    id: '4',
    link: '/appointments',
    label: 'Appointments',
    url: '/assets/img/calendar.png',
    description: 'Lorem ipsum dolet Mwat!!',

  },
  {
    id: '5',
    link: '/patient-accounts',
    label: 'Cash Office',
    url: '/assets/img/office.png',
    description: 'Lorem ipsum dolet Mwat!!',

  },
  {
    id: '6',
    link: '/notes',
    label: 'Doctors',
    url: '/assets/img/doctor.png',
    description: 'Lorem ipsum dolet Mwat!!',

  },
  {
    id: '7',
    link: '/treatment-chart',
    label: 'Inpatient',
    url: '/assets/img/hospital.png',
    description: 'Lorem ipsum dolet Mwat!!',

  },
  {
    id: '8',
    link: '/insurances',
    label: 'Insurances',
    url: '/assets/img/sha.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '9',
    link: '/lab-requests',
    label: 'Laboratory',
    url: '/assets/img/lab.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '10',
    link: '/maternity',
    label: 'Maternity',
    url: '/assets/img/maternity.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '11',
    link: '/patient-monitoring-notes',
    label: 'Nursing Station',
    url: '/assets/img/nurse.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '12',
    link: '/p-dashboard',
    label: 'Patients',
    url: '/assets/img/patient.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '13',
    link: '/payroll',
    label: 'Payroll',
    url: '/assets/img/payroll.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
  {
    id: '14',
    link: '/pharmacy',
    label: 'Pharmacy',
    url: '/assets/img/pharmacy.png',
    description: 'Lorem Ipsum dolet Mwat!!',

  },
];

function Home() {
  // const { data } = usePaginatedSearch({
  //   fetchQuery: useGetAllAppModulesQuery,
  // });

  // const [combinedData, setCombinedData] = useState<AppModuleInterface[]>([]);

  // useEffect(() => {
  //   if (data) {
  //     setCombinedData(administrator.concat(data));
  //   }
  // }, [data, administrator]);

  return (
    <UserProvider>
      <Navbar />
      <div className="p-2">
        <div className="grid grid-cols-4 gap-4">
          {dtx.map((item) => (
            <div
              className="flex-1 border rounded-lg p-2 h-[100px] flex flex-row space-x-2 items-center
            bg-gradient-to-r from-white to-zinc-50
            "
              key={item.id}
            >
              <div className="bg-white p-2 rounded-full ">
                <Image
                  src={item.url}
                  alt="img"
                  width={45}
                  height={45}
                  style={{
                    width: '45px',
                    height: '45px',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div>
                <Link href={item.link}>{item.label}</Link>
                <p
                  className="text-[12px] text-slate-500 "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserProvider>
  );
}

export default function WrappedHome() {
  return (
    <Suspense>
      <Provider store={store}>
        <Home />
      </Provider>
    </Suspense>
  );
}
