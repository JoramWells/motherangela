'use client';

import React, { useCallback, useState } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import SearchInputDropDown, { SelectInputProps } from './SearchInputDropDown';
import { useSearchPatientQuery } from '@/api/patients/patients.api';
import { Button } from '@/components/ui/button';

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

  console.log(search);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <div
          className="w-1/3 bg-white p-4 rounded-lg"
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

              </div>
            )
            : <div>Select a user</div>}
        </div>
      </div>
    </div>
  );
}

export default AddOTC;
