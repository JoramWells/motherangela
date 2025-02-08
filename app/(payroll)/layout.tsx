'use client';

import {
  HandCoins,
  Landmark,
  LayoutDashboardIcon,
  User,
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
