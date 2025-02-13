'use client';

import React, { use } from 'react';

import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

import { payrollEmployeeNHIFColumn } from '@/app/(payroll)/column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetPayrollEmployeeNHIFFilesByPayrollIDQuery } from '@/api/payroll/payrollEmployeeNHIFFile.api';
import TableContainer from '@/components/custom/table/TableContainer';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'In Patient',
    link: '',
  },
];

export default function Benefits({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetPayrollEmployeeNHIFFilesByPayrollIDQuery,
    id,
  });

  //
  console.log(data);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Employee NHIF File"
          data={data}
          columns={payrollEmployeeNHIFColumn}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  );
}

// export default function WrappedBenefits() {
//   return (
//     <Suspense>
//       <Benefits params={undefined} />
//     </Suspense>
//   );
// }
