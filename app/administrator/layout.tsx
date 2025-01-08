"use client";
import { Sidebar } from "@/components/custom/Sidebar/Sidebar";
import SidebarListItemsComponent from "@/components/custom/Sidebar/SidebarListItemsComponent";
import { store } from "@/lib/store";
import {
  ArrowRightLeft,
  Check,
  LayoutDashboardIcon,
  Users,
} from "lucide-react";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import "../globals.css";
const DL = [
  {
    id: "1",
    label: "Dashboard",
    link: "/administrator/dashboard",
    icon: <LayoutDashboardIcon size={17} />,
  },
  // {
  //   id: '2',
  //   label: 'Caregivers',
  //   link: '/users/caregivers',
  //   icon: <HeartHandshake size={17} />
  // },
  {
    id: "3",
    label: "Pharmacy",
    link: "/pharmacy",
    icon: <Check size={17} />,
  },
  {
    id: "4",
    label: "Medicine Stock Take",
    link: "/medicine-stock-take",
    icon: <Users size={17} />,
  },
  {
    id: "5",
    label: "Discharged",
    link: "/discharged",
    icon: <ArrowRightLeft size={17} />,
  },
];

const layout = ({ children }: { children: ReactNode }) => {
  return (
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
};

export default layout;
