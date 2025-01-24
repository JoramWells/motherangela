'use client';

import {
  ArrowRightLeft,
  FlaskRound, LayoutDashboardIcon, TestTubeDiagonal,
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
    label: 'All Tests',
    link: '/all-tests',
    icon: <TestTubeDiagonal size={17} />,
  },
  {
    id: '4',
    label: 'Procedures',
    link: '/procedures',
    icon: <FlaskRound size={17} />,
  },
  {
    id: '5',
    label: 'Internal Requests',
    link: '/internal-lab-requests',
    icon: <ArrowRightLeft size={17} />,
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
