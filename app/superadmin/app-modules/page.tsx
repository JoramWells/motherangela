'use client';

import { useRouter } from 'next/navigation';
import React, { Suspense } from 'react';
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
    label: 'App Modules',
    link: '',
  },
];

function AppModulesPage() {
  const router = useRouter();
  const {
    data, search, total, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllAppModulesQuery,
  });
  return (
    <div>
      <BreadcrumbNav listItems={dataList2} />

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
            rightLabel={(
              <Button
                className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                size="sm"
                onClick={() => {
                  router.push('/superadmin/app-modules/add');
                }}
              >
                Add
              </Button>
      )}
          />
        </div>
      </div>
    </div>
  );
}

export default function WrappedAppModulesPage() {
  return (
    <Suspense>
      <AppModulesPage />
    </Suspense>
  );
}
