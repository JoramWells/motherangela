/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useCallback, useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import moment from 'moment';
import { useSearchPatientQuery } from '@/api/patients/patients.api';
import { useSearchMedicineQuery } from '@/api/medication/medicine.api';
import SearchInputDropDown, { SelectInputProps } from '@/components/custom/forms/SearchInputDropDown';
import InputText from '@/components/custom/forms/InputText';
import { Button } from '@/components/ui/button';

function NewPrescription() {
  const [search, setSearch] = useState<SelectInputProps>({ id: '', label: '' });
  const [searchMedicine, setSearchMedicine] = useState<SelectInputProps>({ id: '', label: '' });
  const { data } = useSearchPatientQuery({
    searchQuery: search?.label as string,
  }, {
    skip: !search?.label || search?.label?.length as number < 0,
  });

  // useSearch({ search, setSearch });

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
      className=" bg-white rounded-lg min-h-[350px] "
    >
      <div>
        <SearchInputDropDown
          search={searchMedicine}
          setSearch={setSearchMedicine}
          data={searchMedicineOptions() ?? []}
        />

        {searchMedicine.id ? (
          <div>
            {/* <div
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

            </div> */}

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
                  {/* <InputText
                    label="Measuring Unit"
                    value={measuringUnit}
                    onChange={setMeasuringUnit}
                  />

                  <InputText
                    label="No. of MU"
                    value={measuringUnit}
                    onChange={setMeasuringUnit}
                  /> */}
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
                    label="Quantity"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={setQuantity}
                  />

                  <div
                    className="flex flex-col space-y-1"
                  >
                    <label
                      htmlFor=""
                      className="font-semibold text-zinc-700 text-[14px]
                      "
                    >
                      Instructions
                    </label>
                    <textarea
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      placeholder="Enter Instructions"
                      className="p-2 border border-slate-200 focus:bg-slate-50  rounded-lg flex-grow text-[12px] focus:border-slate-200 active:border-slate-200
        focus-within:ring-1 focus-within:ring-slate-200 outline-none
        "
                    />
                  </div>

                  <div
                    className="pt-2 flex flex-row items-center justify-end space-x-2"
                  >
                    <Button
                      size="sm"
                      className="shadow-none"
                      variant="outline"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="shadow-none"
                    >
                      Save
                    </Button>
                  </div>

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
