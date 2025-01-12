'use client';

import {
  ArrowRightLeft, History, LayoutDashboardIcon, UserCheck, Users,
} from 'lucide-react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Sidebar } from '@/components/custom/Sidebar/Sidebar';
import SidebarListItemsComponent from '@/components/custom/Sidebar/SidebarListItemsComponent';
import { store } from '@/lib/store';
import '../globals.css';

const DL = [
  {
    id: '1',
    label: 'Dashboard',
    link: '/users/dashboard',
    icon: <LayoutDashboardIcon size={17} />,
  },
  // {
  //   id: '2',
  //   label: 'Caregivers',
  //   link: '/users/caregivers',
  //   icon: <HeartHandshake size={17} />
  // },
  {
    id: '3',
    label: 'Patients',
    link: '/patients',
    icon: <Users size={17} />,
  },
  {
    id: '4',
    label: 'Departmental Status',
    link: '/users/otz',
    icon: <UserCheck size={17} />,
  },
  {
    id: '5',
    label: 'Discharged',
    link: '/discharged',
    icon: <ArrowRightLeft size={17} />,
  },
  {
    id: '8',
    label: 'In-patient',
    link: '/in-patient',
    icon: <History size={17} />,
  },
];

const layout = ({ children }:{children: ReactNode}) => (
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
);

export default layout;
