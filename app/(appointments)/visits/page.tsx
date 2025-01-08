/* eslint-disable no-constant-binary-expression */
"use client";

import { DataTable } from "@/components/custom/table/DataTable";
import React, { useState } from "react";
import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { columns } from "../column";
import { useGetAppointmentsQuery } from "@/api/appointments/appointments.api";
import { useSearchParams } from "next/navigation";
import useSearch from "@/hooks/useSearch";
import usePreprocessData from "@/hooks/usePreprocessData";

const Patients = () => {
    const [search, setSearch] = useState('')
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
  
  const { data: appointmentData } = useGetAppointmentsQuery({
    page: Number(page) ?? 1,
    pageSize: 10,
    searchQuery: search,
  });

  useSearch({search, setSearch})

  const {data, total} = usePreprocessData(appointmentData)

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
          <DataTable columns={columns} data={data ?? []} 
          total={total}
          isSearch={true}
          search={search}
          setSearch={setSearch}
          />
        </div>
      </div>
    </>
  );
};

export default Patients;
