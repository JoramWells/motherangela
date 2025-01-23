'use client';

import React, { useCallback, useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import moment from 'moment';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useSearchPatientQuery } from '@/api/patients/patients.api';
import { useSearchMedicineQuery } from '@/api/medication/medicine.api';
import SearchInputDropDown, { SelectInputProps } from '@/components/custom/forms/SearchInputDropDown';
import { formatCurrency } from '@/utils/number';
import InputText from '@/components/custom/forms/InputText';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Over The Counter Request',
    link: '/requests',
  },
  {
    id: '3',
    label: 'Add',
    link: '',
  },
];
function NewPrescription() {
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

  const [measuringUnit, setMeasuringUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [frq, setFRQ] = useState('');
  const [number_of_days, setNumberOfDays] = useState('');
  const [instructions, setInstructions] = useState('');

  const inputValues = {
    prescription_term: instructions,
    appointment_id: '',
    number_of_days,
    date_dispensed: moment().format('YYYY-MM-DD'),
    medication_id: searchMedicine,
    quantity,
  };

  return (
    <div
      className="p-4 bg-white rounded-lg h-screen"
    >
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
                  {medicineData && formatCurrency(Number(medicineData[0]?.price))}
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

            {medicineData && Number(medicineData[0]?.quantity) !== 0
              ? (
                <div
                  className="ml-2 mt-2 flex flex-row items-center space-x-2 text-[12px] bg-red-50 w-1/2 p-2 rounded-lg text-red-500 font-semibold border border-red-200"
                >
                  <TriangleAlert size={14} />
                  <p>Medicine Out of Stock</p>
                </div>
              )
              : (
                <div className="flex flex-col space-y-2 mt-2">
                  <InputText
                    label="Measuring Unit"
                    value={measuringUnit}
                    onChange={setMeasuringUnit}
                  />

                  <InputText
                    label="No. of MU"
                    value={measuringUnit}
                    onChange={setMeasuringUnit}
                  />
                  <InputText
                    label="Frequency"
                    value={frq}
                    onChange={setFRQ}
                  />
                  <InputText
                    label="No of Days"
                    type="number"
                    value={number_of_days}
                    onChange={setNumberOfDays}
                  />
                  <InputText
                    label="Instructions"
                    type="textarea"
                    value={instructions}
                    onChange={setInstructions}
                  />
                  <InputText
                    label="Quantity"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={setQuantity}
                  />

                </div>
              )}

          </div>
        )
          : <div>Select Medicine</div>}

      </div>

    </div>
  );
}

export default NewPrescription;
