'use client';

import {
  Check,
  FlaskRound,
  House,
  LayoutDashboardIcon,
  PiggyBank,
  Users,
} from 'lucide-react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Sidebar } from '@/components/custom/Sidebar/Sidebar';
import SidebarListItemsComponent from '@/components/custom/Sidebar/SidebarListItemsComponent';
import { store } from '@/lib/store';
import '../globals.css';
import { UserProvider } from '@/context/UserContext';

const DL = [
  {
    id: '1',
    label: 'Dashboard',
    link: '/administrator/dashboard',
    icon: <LayoutDashboardIcon size={17} />,
  },
  {
    id: '7',
    label: 'Departments',
    link: '/administrator/departments',
    icon: <House size={17} />,
  },
  {
    id: '2',
    label: 'Users',
    link: '/administrator/users',
    icon: <Users size={17} />,
  },
  {
    id: '6',
    label: 'Accounts',
    link: '/administrator/accounts',
    icon: <PiggyBank size={17} />,
  },
  {
    id: '3',
    label: 'Pharmacy',
    link: '/administrator/pharmacy',
    icon: <Check size={17} />,
  },
  {
    id: '4',
    label: 'Procedures',
    link: '/administrator/procedures',
    icon: <FlaskRound size={17} />,
  },
];

const layout = ({ children }: { children: ReactNode }) => (
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

export default layout;
