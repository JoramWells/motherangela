'use client';

import React from 'react';
import { DataTable } from '@/components/custom/table/DataTable';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { maternityAntenatalProfileColumns } from '../column';
import { useGetAllMaternityAntenatalProfileQuery } from '@/api/maternity/maternity-antenantal-profile.api';

function Patients() {
  const { data: profileData } = useGetAllMaternityAntenatalProfileQuery();
  return (
    <>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Antenatal Profiles
            </h2>
          </div>
          <DataTable columns={maternityAntenatalProfileColumns} data={profileData ?? []} />
        </div>
      </div>
    </>
  );
}

export default Patients;
