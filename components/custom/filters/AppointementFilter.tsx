
import React from 'react'
import { pageNumber } from '@/utils/pageNumber'
import { type Dispatch, type SetStateAction } from 'react'
import SelectDropdownFilter, { DataItem } from '../forms/SelectDropdownFilter'

interface AppointmentFilterInputProps {
  insurance: string | null
  gender: string
  total?: number | string
  pageSize: number
  setInsurance: Dispatch<SetStateAction<string>>
  setPageSize: Dispatch<SetStateAction<number>>
  setGender: Dispatch<SetStateAction<string>>
  insuranceOptions: DataItem[]
}

function AppointmentFilter ({
  insurance,
  setInsurance,
  pageSize,
  setPageSize,
  total,
  gender,
  setGender,
  insuranceOptions
}: AppointmentFilterInputProps) {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <SelectDropdownFilter
        label="Age (years)"
        onChange={setInsurance}
        paramValue="tab"
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
          (_, index) => ({ id: `${index + 1}`, label: `${index + 1}` })
        )}
        placeholder="Page"
      />
      <SelectDropdownFilter
        label={`Gender :- ${pageNumber(total as number, 10)}`}
        paramValue="gender"
        onChange={setGender}
        value={gender}
        data={[{
            id: 'male',
            label: 'Male'
        },{
            id:'female',
            label: 'Female'
        }]}
        placeholder="Gender"
      />
    </div>
  )
}

export default AppointmentFilter
