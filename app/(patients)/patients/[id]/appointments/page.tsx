'use client';

import React, { use, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useGetAppointmentsByPatientIDQuery } from '@/api/appointments/appointments.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { appointmentDetailColumns } from '@/app/(patients)/column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { Button } from '@/components/ui/button';

function AppointmentDetailsPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAppointmentsByPatientIDQuery, id,
  });
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
      label: 'Appointments',
      link: `/patients/${id}/appointments`,

    },

  ], [data]);

  const router = useRouter();

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2"
      >
        <TableContainer
          title={` ${data[0]?.patient_detail.first_name} Appointments`}
          columns={appointmentDetailColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
          rightLabel={(
            <Button
              size="sm"
              className="shadow-none bg-emerald-600 hover:bg-emerald-700"
              onClick={() => router.push(`/patients/${data?.[0]?.patient_id}/appointments/add`)}
            >
              NEW
            </Button>
          )}
        />
      </div>
    </div>
  );
}

export default AppointmentDetailsPage;
