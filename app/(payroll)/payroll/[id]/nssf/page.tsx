'use client';

import React, { use } from 'react';

import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

import { payrollEmployeeNSSFFileColumn } from '@/app/(payroll)/column';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetPayrollEmployeeNSSFFilesByPayrollIDQuery } from '@/api/payroll/payrollEmployeeNSSFFile.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'NSSF',
    link: '',
  },
];

export default function Benefits({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);

  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetPayrollEmployeeNSSFFilesByPayrollIDQuery,
    id,
  });

  //
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Employee NSSF File"
          data={data}
          columns={payrollEmployeeNSSFFileColumn}
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
