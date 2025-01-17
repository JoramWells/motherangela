'use client';

import React, { useCallback, useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useSearchPatientQuery } from '@/api/patients/patients.api';
import { Button } from '@/components/ui/button';
import { useSearchMedicineQuery } from '@/api/medication/medicine.api';
import SearchInputDropDown, { SelectInputProps } from '@/components/custom/forms/SearchInputDropDown';
import { formatCurrency } from '@/utils/number';

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
  const [searchMedicine, setSearchMedicine] = useState<SelectInputProps>({ id: '', label: '' });
  const { data } = useSearchPatientQuery({
    searchQuery: search?.label as string,
  }, {
    skip: !search?.label || search?.label?.length as number < 0,
  });

  const { data: medicineData } = useSearchMedicineQuery(
    {
      searchQuery: searchMedicine.label as string,
    },
    {
      skip: !searchMedicine?.label || searchMedicine?.label?.length as number < 0,

    },
  );
  const searchOptions = useCallback(
    () => data?.map((item) => ({
      id: item?.patient_id as unknown as string,
      label: `${item?.first_name} ${item.middle_name}`,
    })),
    [data],
  );

  const searchMedicineOptions = useCallback(() => medicineData?.map((item) => ({
    id: item.medication_id,
    label: item.medication_name,
  })), [medicineData]);

  console.log(medicineData);

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
                <SearchInputDropDown
                  search={searchMedicine}
                  setSearch={setSearchMedicine}
                  data={searchMedicineOptions() ?? []}
                />

                {searchMedicine.id ? (
                  <div>
                    <div
                      className="w-1/2 p-2 flex flex-col space-y-2 border ml-2 rounded-lg bg-zinc-50"
                    >
                      <div
                        className="flex flex-row justify-between items-center text-[12px] text-zinc-500"
                      >
                        <p>Price</p>
                        <p>
                          {medicineData && formatCurrency(medicineData[0]?.price)}
                          {' '}
                          /=
                        </p>
                      </div>

                      <div
                        className="flex flex-row justify-between items-center text-[12px] text-slate-500"
                      >
                        <p>Quantity</p>
                        <p>
                          {medicineData && medicineData[0].quantity}
                        </p>
                      </div>

                    </div>

                    {medicineData[0]?.quantity <= 0
                      ? (
                        <div
                          className="ml-2 mt-2 flex flex-row items-center space-x-2 text-[12px] bg-red-50 w-1/2 p-2 rounded-lg text-red-500 font-semibold border border-red-200"
                        >
                          <TriangleAlert size={14} />
                          <p>Medicine Out of Stock</p>
                        </div>
                      )
                      : (
                        <div>
                          <p>Prescribe</p>
                        </div>
                      )}

                  </div>
                )
                  : <div>Select Medicine</div>}

              </div>
            )
            : (
              <div>
                <p>Select Patient</p>

              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default AddOTC;
