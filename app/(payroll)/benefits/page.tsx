"use client";

import { DataTable } from "@/components/custom/table/DataTable";
import React from "react";
import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { employeeBenefitsColumns } from "../column";
import { useGetAllPayrollEmployeeBenefitsQuery } from "@/api/payroll/payrollEmployeeBenefitsFile.api";

const Patients = () => {
  const { data: profileData } = useGetAllPayrollEmployeeBenefitsQuery();
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Employee Benefits
            </h2>
          </div>
          <DataTable columns={employeeBenefitsColumns} data={profileData ?? []} />
        </div>
      </div>
    </>
  );
};

export default Patients;
