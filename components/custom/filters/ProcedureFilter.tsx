import React from 'react';
import { type Dispatch, type SetStateAction } from 'react';
import { pageNumber } from '@/utils/number';
import SelectDropdownFilter, { DataItem } from '../forms/SelectDropdownFilter';

interface ProcedureFilterInputProps {
  serviceType: string | null
  category: string | null
  total: number
  pageSize: number
  setServiceType: Dispatch<SetStateAction<string>>
  setCategory: Dispatch<SetStateAction<string>>
  setPageSize: Dispatch<SetStateAction<number>>
  serviceTypeOptions: DataItem[]
  categoryOptions: DataItem[]
}

function ProcedureFilter({
  category,
  categoryOptions,
  setCategory,
  serviceType,
  setServiceType,
  pageSize,
  setPageSize,
  total,
  serviceTypeOptions,
}: ProcedureFilterInputProps) {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <SelectDropdownFilter
        label="Service Type"
        onChange={setServiceType}
        paramValue="serviceType"
        value={serviceType as string}
        data={serviceTypeOptions}
        placeholder="Service Type"
      />
      <SelectDropdownFilter
        label="Category"
        onChange={setCategory}
        paramValue="category"
        value={category as string}
        data={categoryOptions}
        placeholder="Category"
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
