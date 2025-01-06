"use client";

import { DataTable } from "@/components/custom/table/DataTable";
import React from "react";
import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { useGetAppointmentsQuery } from "@/api/appointments/appointments.api";
import { maternityProfileColumns } from "../column";
import { useGetAllMaternityAntenatalProfileQuery } from "@/api/maternity/maternity-antenantal-profile.api";

const Patients = () => {
  const { data: profileData } = useGetAllMaternityAntenatalProfileQuery();
  console.log(profileData)
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
          {/* <DataTable columns={maternityProfileColumns} data={appointmentData ?? []} /> */}
        </div>
      </div>
    </>
  );
};

export default Patients;
