'use client';

import {
  Baby,
  BookOpenCheck,
  Dumbbell,
  Footprints,
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
import { UserProvider } from '@/context/UserContext';

const DL = [
  {
    id: '1',
    label: 'Dashboard',
    link: '/users/dashboard',
    icon: <LayoutDashboardIcon size={17} />,
  },
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
  {
    id: '2',
    label: 'Maternity',
    link: '/maternity',
    icon: <HeartHandshake size={17} />,
  },
  {
    id: '6',
    label: 'Physical Examination',
    link: '/physical-examination',
    icon: <Dumbbell size={17} />,
  },
  {
    id: '7',
    label: 'Postnatal Examination',
    link: '/postnatal-examination',
    icon: <BookOpenCheck size={17} />,
  },
  {
    id: '8',
    label: 'Visits',
    link: '/m-visits',
    icon: <Footprints size={17} />,
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
