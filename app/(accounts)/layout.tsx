'use client';

import {
  BookA,
  BookCopy,
  DollarSign,
  House,
  LayoutDashboardIcon,
  PiggyBank,
  Wallet,

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
    label: 'Accounts',
    link: '/accounts',
    icon: <PiggyBank size={17} />,
  },
  {
    id: '4',
    label: 'Assets',
    link: '/assets',
    icon: <BookA size={17} />,
  },
  {
    id: '5',
    label: 'Departments',
    link: '/departments',
    icon: <House size={17} />,
  },
  {
    id: '6',
    label: 'Documents',
    link: '/documents',
    icon: <BookCopy size={17} />,
  },
  {
    id: '9',
    label: 'Invoice Payments',
    link: '/invoice-payments',
    icon: <DollarSign size={17} />,
  },
  {
    id: '10',
    label: 'Personal Account',
    link: '/personal-account-charges',
    icon: <Wallet size={17} />,
  },
];

const layout = ({ children }: { children: ReactNode }) => (
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
