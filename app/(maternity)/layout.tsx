'use client';

import {
  Baby,
  HeartHandshake,
  LayoutDashboardIcon,
  Users,
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
  {
    id: '2',
    label: 'Maternity',
    link: '/maternity',
    icon: <HeartHandshake size={17} />,
  },
  // {
  //   id: "3",
  //   label: "Checklist",
  //   link: "/checklist",
  //   icon: <Check size={17} />,
  // },
  {
    id: '4',
    label: 'Antenatal Profiles',
    link: '/antenatal',
    icon: <Users size={17} />,
  },
  {
    id: '5',
    label: 'Deliveries',
    link: '/deliveries',
    icon: <Baby size={17} />,
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
