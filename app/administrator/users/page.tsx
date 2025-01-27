'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllUsersQuery } from '@/api/users/users.api';
import TableContainer from '@/components/custom/table/TableContainer';
import { usersColumn } from './column';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Users',
    link: '',
  },
];

function UsersPage() {
  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({
    fetchQuery: useGetAllUsersQuery,
  });
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Users"
          columns={usersColumn}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        //   rightLabel={(
        //     <Button
        //       className="bg-emerald-600 shadow-none hover:bg-emerald-700"
        //       size="sm"
        //       onClick={() => router.push('/patients/add')}
        //     >
        //       NEW
        //     </Button>
        //   )}
        />

      </div>
    </div>
  );
}

export default function WrappedUsersPage() {
  return (
    <Suspense>
      <UsersPage />
    </Suspense>
  );
}
