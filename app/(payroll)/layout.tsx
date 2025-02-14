/* eslint-disable react/jsx-closing-tag-location */

'use client';

import {
  ClockAlert,
  HandCoins,
  Landmark,
  LayoutDashboardIcon,
  TicketMinus,
  TicketPlus,
  User,
} from 'lucide-react';
import React, { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { useParams, usePathname } from 'next/navigation';
import { Sidebar } from '@/components/custom/Sidebar/Sidebar';
import SidebarListItemsComponent from '@/components/custom/Sidebar/SidebarListItemsComponent';
import { store } from '@/lib/store';
import '../globals.css';
import { UserProvider } from '@/context/UserContext';

const DL = [
  {
    id: '1',
    label: 'Dashboard',
    link: '/users/dashboard',
    icon: <LayoutDashboardIcon size={17} />,
  },
  {
    id: '3',
    label: 'Employee Records',
    link: '/employee-records',
    icon: <User size={17} />,
  },
  {
    id: '2',
    label: 'Payrolls',
    link: '/payroll',
    icon: <HandCoins size={17} />,
  },

  {
    id: '4',
    label: 'Loan Records',
    link: '/loan-records',
    icon: <Landmark size={17} />,
  },
];

const layout = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const { id, employeeID } = params;
  const pathname = usePathname();

  const DL2 = useMemo(() => [
    {
      id: '1',
      label: 'Dashboard',
      link: '/users/dashboard',
      icon: <LayoutDashboardIcon size={17} />,
    },
    {
      id: '2',
      label: 'Payments',
      link: `/payroll/${id}/payments`,
      icon: <HandCoins size={17} />,
    },
    {
      id: '3',
      label: 'Benefits',
      link: `/payroll/${id}/benefits`,
      icon: <TicketPlus size={17} />,
    },

    {
      id: '4',
      label: 'deductions',
      link: `/payroll/${id}/deductions`,
      icon: <TicketMinus size={17} />,
    },
    {
      id: '5',
      label: 'NHIF',
      link: `/payroll/${id}/nhif`,
      icon: <div
        className="font-bold text-[12px] "
      >
        NH
      </div>,
    },
    {
      id: '6',
      label: 'NSSF',
      link: `/payroll/${id}/nssf`,
      icon: <div
        className="font-bold text-[12px] "
      >
        NS
      </div>,
    },
    {
      id: '7',
      label: 'Pension',
      link: `/payroll/${id}/pension`,
      icon: <ClockAlert size={17} />,
    },

  ], [id]);

  if (pathname === `/payroll/${id}`
|| pathname === `/payroll/${id}/benefits`
|| pathname === `/payroll/${id}/benefits/${employeeID}`
|| pathname === `/payroll/${id}/deductions`
|| pathname === `/payroll/${id}/deductions/${employeeID}`
|| pathname === `/payroll/${id}/payments`
|| pathname === `/payroll/${id}/nhif`
|| pathname === `/payroll/${id}/nssf`
|| pathname === `/payroll/${id}/pension`

  ) {
    return (
      <UserProvider>
        <Provider store={store}>
          <div className="flex flex-row">
            <Sidebar>
              <SidebarListItemsComponent dataList={DL2} />
            </Sidebar>
            <div className="flex flex-col flex-1 h-screen overflow-y-auto bg-slate-50">
              {/* <Navbar /> */}

              {children}
            </div>
          </div>
        </Provider>
      </UserProvider>
    );
  }
  return (
    <UserProvider>
      <Provider store={store}>
        <div className="flex flex-row">
          <Sidebar>
            <SidebarListItemsComponent dataList={DL} />
          </Sidebar>
          <div className="flex flex-col flex-1 h-screen overflow-y-auto bg-slate-50">
            {/* <Navbar /> */}

            {children}
          </div>
        </div>
      </Provider>
    </UserProvider>
  );
};

export default layout;
