'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAdmissionsByPatientIDQuery } from '@/api/admission/admissions.api';
import TableContainer from '@/components/custom/table/TableContainer';
import { admissionDetailColumns } from '@/app/(patients)/column';
import { Button } from '@/components/ui/button';

function AdmissionsPages({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({ fetchQuery: useGetAdmissionsByPatientIDQuery, id });
  const listItems = useMemo(() => [
    {
      id: '1',
      label: 'home',
      link: '/',
    },
    {
      id: '2',
      label: 'Patients',
      link: '/patients',
    },
    {
      id: '3',
      label: `${data[0]?.patient_detail?.first_name} ${data[0]?.patient_detail?.middle_name}`,
      link: `/patients/${id}`,
    },
    {
      id: '4',
      label: 'Admission',
      link: `/patients/${id}/admission`,

    },

  ], [data]);
  const router = useRouter();

  console.log(data);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="In-Patient (Admitted)"
          columns={admissionDetailColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              className="bg-emerald-600 shadow-none hover:bg-emerald-700"
              size="sm"
              onClick={() => router.push(`/patients/${id}/admissions/add`)}

            >
              NEW
            </Button>
          )}
        />

      </div>
    </div>
  );
}

export default AdmissionsPages;
