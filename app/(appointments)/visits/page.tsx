"use client";

import { DataTable } from "@/components/custom/DataTable";
import React from "react";
import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { columns } from "../column";
import { useGetAppointmentsQuery } from "@/api/appointments/appointments.api";

const Patients = () => {
  const { data: appointmentData } = useGetAppointmentsQuery();
  console.log(appointmentData)
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Patient History
            </h2>
          </div>
          <DataTable columns={columns} data={appointmentData ?? []} />
        </div>
      </div>
    </>
  );
};

export default Patients;
