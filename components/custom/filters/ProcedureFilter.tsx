import React from 'react';
import { type Dispatch, type SetStateAction } from 'react';
import { pageNumber } from '@/utils/number';
import SelectDropdownFilter, { DataItem } from '../forms/SelectDropdownFilter';

interface ProcedureFilterInputProps {
  insurance: string | null
  total: number
  pageSize: number
  setInsurance: Dispatch<SetStateAction<string>>
  setPageSize: Dispatch<SetStateAction<number>>
  insuranceOptions: DataItem[]
}

function ProcedureFilter({
  insurance,
  setInsurance,
  pageSize,
  setPageSize,
  total,
  insuranceOptions,
}: ProcedureFilterInputProps) {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <SelectDropdownFilter
        label="Insurance"
        onChange={setInsurance}
        paramValue="insurance"
        value={insurance as string}
        data={insuranceOptions}
        placeholder="Insurance"
      />
      <SelectDropdownFilter
        label={`Page No :- ${pageNumber(total as number, 10)}`}
        paramValue="page"
        onChange={setPageSize}
        value={`${pageSize}`}
        data={Array.from(
          { length: pageNumber(total as number, 10) },
          (_, index) => ({ id: `${index + 1}`, label: `${index + 1}` }),
        )}
        placeholder="Page"
      />

    </div>
  );
}

export default ProcedureFilter;
