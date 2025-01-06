"use client";

import { DataTable } from "@/components/custom/table/DataTable";
import React from "react";
import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { useGetAllPayrollEmployeeRecordsQuery } from "@/api/payroll/payrollEmployeeRecords.api";
import { employeeRecordsColumn } from "../column";

const Patients = () => {
  const { data: profileData } = useGetAllPayrollEmployeeRecordsQuery();
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Employee Records
            </h2>
          </div>
          <DataTable columns={employeeRecordsColumn} data={profileData ?? []} />
        </div>
      </div>
    </>
  );
};

export default Patients;
