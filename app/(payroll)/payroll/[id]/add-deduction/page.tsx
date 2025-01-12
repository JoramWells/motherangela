'use client';

import React, { use, useMemo } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPayrollPeriodQuery } from '@/api/payroll/payrollPeriods';

function AddPayrollPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetPayrollPeriodQuery(id);

  const listItems = useMemo(
    () => [
      {
        id: '1',
        label: 'home',
        link: '/',
      },
      {
        id: '2',
        label: 'Payroll Records',
        link: `/payroll/${id}`,
      },
      {
        id: '3',
        label: `${data?.payroll_description}`,
        link: '',
      },
      {
        id: '4',
        label: 'New',
        link: '',
      },
    ],
    [data],
  );

  console.log(data);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2"
      >
        <div
          className="w-1/3 p-2 bg-white rounded-lg border border-zinc-100"
        >
          <p>Add New Payroll Deduction</p>
          {id}
        </div>
      </div>
    </div>
  );
}

export default AddPayrollPage;
