'use client';

import React, { useId } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/custom/nav/Navbar';
import { UserProvider } from '@/context/UserContext';

export default function Home() {
  return (
    <UserProvider>
      <Navbar />
      <div className="p-2">
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              id: useId(),
              link: '/superadmin/hospitals',
              label: 'Super Admin',
              url: '/assets/img/superadmin.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/administrator/pharmacy',
              label: 'Administrator',
              url: '/assets/img/admin.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/assets',
              label: 'Accounts',
              url: '/assets/img/cash.png',
              description: 'Lorem ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/appointments',
              label: 'Appointments',
              url: '/assets/img/calendar.png',
              description: 'Lorem ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/patient-accounts',
              label: 'Cash Office',
              url: '/assets/img/office.png',
              description: 'Lorem ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/notes',
              label: 'Doctors',
              url: '/assets/img/doctor.png',
              description: 'Lorem ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/treatment-chart',
              label: 'Inpatient',
              url: '/assets/img/hospital.png',
              description: 'Lorem ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/insurances',
              label: 'Insurances',
              url: '/assets/img/sha.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/lab-requests',
              label: 'Laboratory',
              url: '/assets/img/lab.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/maternity',
              label: 'Maternity',
              url: '/assets/img/maternity.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/patient-monitoring-notes',
              label: 'Nursing Station',
              url: '/assets/img/nurse.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/p-dashboard',
              label: 'Patients',
              url: '/assets/img/patient.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/payroll',
              label: 'Payroll',
              url: '/assets/img/payroll.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
            {
              id: useId(),
              link: '/pharmacy',
              label: 'Pharmacy',
              url: '/assets/img/pharmacy.png',
              description: 'Lorem Ipsum dolet Mwat!!',

            },
          ].map((item) => (
            <div
              className="flex-1 border rounded-lg p-2 h-[100px] flex flex-row space-x-2 items-center
            bg-gradient-to-r from-white to-zinc-50
            "
              key={item.id}
            >
              <div className="bg-white p-2 rounded-full ">
                <Image
                  src={`${item.url}`}
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
