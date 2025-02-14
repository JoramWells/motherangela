'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { type AppModuleInterface } from 'motherangela';
import { Button } from '@/components/ui/button';
// import { columns } from './columns'
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllAppModulesQuery } from '@/api/app-modules/appModule.api';
import TableContainer from '@/components/custom/table/TableContainer';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { columns } from './column';

export interface AppModuleResponseInterface {
  data: AppModuleInterface[]
  page: number
  total: number
  pageSize: number
  searchQuery: string
}

const dataList2 = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Patients',
    link: '/',
  },
];

function AppModulesPage() {
  const router = useRouter();
  const {
    data, search, total, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllAppModulesQuery,
  });
  console.log(data);
  return (
    <div>
      <div className="relative">
        <BreadcrumbNav listItems={dataList2} />

        <Button
          className="absolute right-2 top-2"
          size="sm"
          onClick={() => {
            router.push('/administrator/app-modules/add');
          }}
        >
          Add
        </Button>
      </div>
      <div className="p-2">
        <div className="bg-white rounded-lg p-4">
          <TableContainer
            title="App Modules"
            columns={columns}
            data={data ?? []}
            total={total as number}
            // isLoading={isLoading}
            search={search}
            setSearch={setSearch}
            // debounceSearch={debounceSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default AppModulesPage;
