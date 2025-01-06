"use client";

import { DataTable } from "@/components/custom/table/DataTable";
import React from "react";
import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { useGetAllMaternityProfilesQuery } from "@/api/maternity/maternity.api";
import { maternityProfileColumns } from "../column";

const Patients = () => {
  const { data: maternityData } = useGetAllMaternityProfilesQuery();
  console.log(maternityData)
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Maternity Profiles
            </h2>
          </div>
          <DataTable columns={maternityProfileColumns} data={maternityData ?? []} />
        </div>
      </div>
    </>
  );
};

export default Patients;
