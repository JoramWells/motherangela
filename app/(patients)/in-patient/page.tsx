"use client";

import { DataTable } from "@/components/custom/table/DataTable";
import React from "react";
import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { admissionColumn } from "../column";
import { useGetAllAdmissionsQuery } from "@/api/admission/admissions.api";

const Admission = () => {
  const { data: patientsData } = useGetAllAdmissionsQuery();
  console.log(patientsData);
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 border-b bg-slate-50 rounded-t-lg">
            <h2 className="text-lg text-slate-700">
              Patient History
            </h2>
          </div>
          <DataTable columns={admissionColumn} data={patientsData ?? []} />
        </div>
      </div>
    </>
  );
};

export default Admission;
