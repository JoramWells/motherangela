'use client';

import React, { use, useMemo, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import InputSelect from '@/components/custom/forms/InputSelect';
import { Button } from '@/components/ui/button';

function AddAppointmentPage({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const { data } = useGetPatientQuery(id, {
    skip: !id,
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
      label: `${data?.first_name} ${data?.middle_name}`,
      link: `/patients/${id}`,
    },
    {
      id: '4',
      label: 'Appointments',
      link: `/patients/${id}/appointments`,

    },
    {
      id: '5',
      label: 'Add',
      link: '/patients',
    },
  ], [data]);

  const [category, setCategory] = useState('');

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <div className=" border border-zinc-200 bg-white w-1/2 rounded-lg flex flex-col space-y-2">
          <div
            className="p-2 bg-zinc-50 border-b border-zinc-200 rounded-t-lg"
          >
            <p
              className="text-[14px] font-semibold text-zinc-700 "
            >
              { `${data?.first_name} ${data?.middle_name}`}

            </p>
          </div>
          <div className=" p-2 flex flex-col space-y-2">
            <InputSelect
              data={[{
                id: '1',
                label: 'data',
              }]}
              label="Appointment Category"
              value={category}
              onChange={setCategory}
            />
            <InputSelect
              label="Select Consultation Type"
              data={[{
                id: '1',
                label: 'data',
              }]}
              value={category}
              onChange={setCategory}
            />
            <InputSelect
              label="Select Referral Type"
              data={[{
                id: '1',
                label: 'data',
              }]}
              value={category}
              onChange={setCategory}
            />
            <div className="pt-4 flex justify-end flex-row space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="shadow-none"
              >
                Cancel
                <X />

              </Button>
              <Button
                size="sm"
                className="shadow-none bg-sky-600 hover:bg-sky-700"
              >
                Payment
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAppointmentPage;
