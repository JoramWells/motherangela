'use client';

import React, { useCallback, useMemo, useState } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import SearchInputDropDown, { SelectInputProps } from './SearchInputDropDown';
import { useSearchPatientQuery } from '@/api/patients/patients.api';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/custom/table/DataTable';
import { medicineSelectColumns } from '../../column';
import { useGetAllMedicationQuery } from '@/api/medication/medicine.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { DataTableSelect } from '@/components/custom/table/DataTableSelect';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Over The Counter Request',
    link: '',
  },
  {
    id: '3',
    label: 'Over The Counter Request',
    link: '',
  },
];
function AddOTC() {
  const [search, setSearch] = useState<SelectInputProps>({ id: '', label: '' });
  const { data } = useSearchPatientQuery({
    searchQuery: search?.label as string,
  }, {
    skip: !search?.label || search?.label?.length as number < 0,
  });
  //   useSearch({ search, setSearch });
  const searchOptions = useCallback(
    () => data?.map((item) => ({
      id: item?.patient_id as unknown as string,
      label: `${item?.first_name} ${item.middle_name}`,
    })),
    [data],
  );

  const {
    data: medData, total, search: searchMed, setSearch: setSearchMed,
  } = usePaginatedSearch({ fetchQuery: useGetAllMedicationQuery, pageSize: 5 });

  const formatData = useMemo(
    () => medData?.map((item) => ({
      ...item,
      id: item.medication_id, // Ensures id is consistent
    })) ?? [],
    [medData],
  );

  console.log(formatData);

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <div
          className="w-1/2 bg-white p-4 rounded-lg"
        >
          <SearchInputDropDown
            search={search}
            setSearch={setSearch}
            data={searchOptions() ?? []}
          />

          {search.id
            ? (
              <div>
                <Button
                  size="sm"
                >
                  Select Text
                </Button>

                <DataTable />

              </div>
            )
            : (
              <div>
                <DataTableSelect
                  columns={medicineSelectColumns}
                  data={formatData ?? []}
                  total={total as number}
                  isSearch
                  search={searchMed}
                  setSearch={setSearchMed}
                />

              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default AddOTC;
